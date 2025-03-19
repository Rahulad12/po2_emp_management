import { responseMessage } from "../utils/ResponseMessage.js";

/**
 * Register a new user
 * @param {string} url - The database URL
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<{success: boolean, message: string, user?: string}>}
 */
export const registerUser = async (url, email, password) => {
  if (!email || !password) {
    return responseMessage(false, "Please enter both email and password");
  }

  try {
    const response = await fetch(url);
    const users = await response.json();

    if (users.some((user) => user.email === email)) {
      return responseMessage(false, "User already exists");
    }

    const newUser = { email, password };
    const registerResponse = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });

    const result = await registerResponse.json();
    return registerResponse.ok
      ? responseMessage(true, {
          user: result.id,
          message: "Registration Successful",
        })
      : responseMessage(false, result.message);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

/**
 * Login user
 * @param {string} url - The database URL
 * @param {string} email - The user's email
 * @param {string} password - The user's password
 * @returns {Promise<{success: boolean, message: string, user?: string}>}
 */
export const loginUser = async (url, email, password) => {
  if (!email || !password) {
    return responseMessage(false, "Please enter both email and password");
  }

  try {
    const response = await fetch(url);
    const users = await response.json();

    const userExist = users.find((user) => user.email === email);
    if (!userExist) {
      return responseMessage(false, "User not found");
    }

    if (userExist.password !== password) {
      return responseMessage(false, "Invalid Credentials");
    }

    return responseMessage(true, {
      user: userExist.id,
      message: "Login Successful",
    });
  } catch (error) {
    return responseMessage(false, error.message);
  }
};
