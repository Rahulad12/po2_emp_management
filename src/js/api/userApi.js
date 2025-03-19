import { registerUser, loginUser } from "../controllers/authControllers.js";

import {
  getUsersById,
  changePassword,
  updateEmail,
} from "../controllers/userControllers.js";
import { AUTH_URL } from "../constant.js";
export const registerUserApi = async (email, password) => {
  return await registerUser(AUTH_URL, email, password); // Call the regiserUser function as a promise
};

export const loginUserApi = async (email, password) => {
  return await loginUser(AUTH_URL, email, password); // Call the loginUser function as a promise
};

export const getUserByIdApi = async (userID) => {
  return await getUsersById(AUTH_URL, userID); // Call the getUserById function as a promise
};

export const changePasswordApi = async (
  userID,
  newPassword,
  currentPassword
) => {
  return await changePassword(AUTH_URL, userID, newPassword, currentPassword); // Call the changePassword function as a promise
};

export const updateEmailApi = async (userID, newEmail) => {
  return await updateEmail(AUTH_URL, userID, newEmail);
};
