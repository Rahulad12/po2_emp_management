import { loginUserApi } from "../api/userApi.js";
import { authformHelper, resetForm, isLoggedIn } from "../utils/helper.js";
import {
  errorMessage,
  passwordErrorMessage,
  emailErrorMessage,
} from "../utils/errorHelper.js";

// Redirect logged-in user to dashboard
if (isLoggedIn()) {
  window.location.href = "../screen/employeeDashboard.html";
}

export const userLogin = () => {
  const { authForm, emailInput, passwordInput, submitButton } =
    authformHelper();

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous error messages
    errorMessage({ message: "", success: true });
    emailErrorMessage("");
    passwordErrorMessage("");

    let hasError = false;

    if (!email) {
      emailErrorMessage("Email is required.");
      hasError = true;
    }

    if (!password) {
      passwordErrorMessage("Password is required.");
      hasError = true;
    }

    if (hasError) return;

    submitButton.disabled = true;
    submitButton.innerText = "Logging in...";

    try {
      const response = await loginUserApi(email, password);
      console.log(response);
      // Check if login was successful
      if (response.success) {
        localStorage.setItem("token", response?.message?.user); // Store token
        errorMessage({
          success: true,
          message: response.message.message || "Login Successful",
        });
        //Redirect to dashboard after a short delay of 1 second when login is successful
        setTimeout(() => {
          window.location.href = "/src/screen/employeeDashboard.html";
        }, 1000);
      } else {
        errorMessage({
          success: false,
          message: response?.message || "Login failed. Please try again.",
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      errorMessage({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      resetForm(emailInput, passwordInput);
      submitButton.disabled = false;
      submitButton.innerText = "Login"; // Reset button text
    }
  });
};
userLogin();
