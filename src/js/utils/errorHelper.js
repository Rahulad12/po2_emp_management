export const passwordErrorMessage = (message) => {
  const errorElement = document.getElementById("password-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const emailErrorMessage = (message) => {
  const errorElement = document.getElementById("email-error-message");
  errorElement.textContent = message;
  errorElement.style.color = "red";
  errorElement.style.display = message ? "block" : "none";
};
export const errorMessage = (message) => {
  const errorElement = document.getElementById("error-message");
  errorElement.textContent = message.message;
  errorElement.style.color = message.success ? "green" : "red";
  errorElement.style.display = message.message ? "block" : "none";
};

export const oldPasswordErrorMessage = (message) => {
  const oldPasswordInput = document.getElementById(
    "old-password-error-message"
  );
  oldPasswordInput.textContent = message;
  oldPasswordInput.style.color = "red";
  oldPasswordInput.style.display = message ? "block" : "none";
};

export const newPasswordErrorMessage = (message) => {
  const newPasswordInput = document.getElementById(
    "new-password-error-message"
  );
  newPasswordInput.textContent = message;
  newPasswordInput.style.color = "red";
  newPasswordInput.style.display = message ? "block" : "none";
};

export const confirmPasswordErrorMessage = (message) => {
  const confirmPasswordInput = document.getElementById(
    "confirm-password-error-message"
  );
  confirmPasswordInput.textContent = message;
  confirmPasswordInput.style.color = "red";
  confirmPasswordInput.style.display = message ? "block" : "none";
};

export const changeEmailErrorMessage = (message) => {
  const changeEmailInput = document.getElementById(
    "change-email-error-message"
  );
  changeEmailInput.textContent = message;
  changeEmailInput.style.color =
    message == "Email changed successfully" ? "green" : "red";
  changeEmailInput.style.display = message ? "block" : "none";
};
