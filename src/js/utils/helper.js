const authformHelper = () => {
  const authForm = document.getElementById("form");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");

  const submitButton = document.getElementById("submit-button");

  return { authForm, emailInput, passwordInput, submitButton };
};

const resetForm = (...data) => {
  data.forEach((element) => {
    element.value = "";
  });
  return data;
};

const changePasswordFromHelper = () => {
  const changePasswordForm = document.getElementById("change-password-form");
  const oldPasswordInput = document.getElementById("old-password");
  const newPasswordInput = document.getElementById("new-password");
  const confirmPasswordInput = document.getElementById("confirm-password");

  const changePasswordButton = document.getElementById("change-password-btn");

  return {
    changePasswordForm,
    oldPasswordInput,
    newPasswordInput,
    confirmPasswordInput,
    changePasswordButton,
  };
};

const changeEmailHelper = () => {
  const changeEmailForm = document.getElementById("change-email-form");
  const newEmailInput = document.getElementById("email");
  const changeEmailButton = document.getElementById("change-email-btn");

  return { changeEmailForm, newEmailInput, changeEmailButton };
};
const isLoggedIn = () => {
  return !!localStorage.getItem("token");
};
export {
  authformHelper,
  resetForm,
  changePasswordFromHelper,
  changeEmailHelper,
  isLoggedIn,
};
