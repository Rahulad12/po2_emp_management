import { registerUserApi } from "../api/userApi.js";
import { errorMessage } from "../utils/errorHelper.js";
import { authformHelper, resetForm, isLoggedIn } from "../utils/helper.js";
import { manageBaseUrl } from "../utils/manageBaseUrl.js";
import { checkEmailPassword } from "../utils/validator.js";

// Redirect if already logged in
if (isLoggedIn()) {
  window.location.href = `${
    import.meta.env.BASE_URL
  }/src/screen/employeeDashboard.html`;
}
manageBaseUrl();

export const userRegister = () => {
  const { authForm, emailInput, passwordInput, submitButton } =
    authformHelper();

  authForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Clear previous general error message
    errorMessage({ message: "", success: true });

    const validationError = checkEmailPassword(password, email); // Check email and password and return the error message here
    if (validationError) {
      return;
    }

    submitButton.disabled = true;
    submitButton.innerText = "Registering...";

    try {
      const response = await registerUserApi(email, password);

      if (response?.success) {
        errorMessage({
          success: true,
          message: response?.message?.message || "Registration successful",
        });
        window.location.href = `${
          import.meta.env.BASE_URL
        }/src/screen/userLogin.html`;
      } else {
        errorMessage({
          success: false,
          message: response?.message || "Registration failed",
        });
      }
    } catch (error) {
      console.error("Error during registration:", error);
      errorMessage({
        success: false,
        message: "An error occurred. Please try again later.",
      });
    } finally {
      // Reset form and button state
      resetForm(emailInput, passwordInput);
      submitButton.disabled = false;
      submitButton.innerText = "Register";
    }
  });
};

// Initialize register function
userRegister();
