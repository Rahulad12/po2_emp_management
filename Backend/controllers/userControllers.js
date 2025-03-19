import { responseMessage } from "../utils/ResponseMessage.js";

const getUsersById = async (url, userID) => {
  try {
    const response = await fetch(`${url}/${userID}`);
    const user = await response.json();
    if (!user) return responseMessage(false, "User not found");
    return responseMessage(true, user);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

const changePassword = async (url, userID, newPassword, currentPassword) => {
  try {
    const response = await fetch(`${url}/${userID}`);
    const user = await response.json();
    if (!user) return responseMessage(false, "User not found");

    if (user.password !== currentPassword) {
      console.log("current password")
      return responseMessage(false, "Current password is incorrect");
    }

    if (user.password === newPassword) {
      return responseMessage(
        false,
        "New password cannot be the same as the old password"
      );
    }

    user.password = newPassword;

    const updateResponse = await fetch(`${url}/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const updatedUser = await updateResponse.json();

    return responseMessage(true, {
      user: updatedUser.id,
      message: "Password changed successfully",
    });
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

const updateEmail = async (url, userID, newEmail) => {
  try {
    const response = await fetch(`${url}/${userID}`);
    const user = await response.json();
    if (!user) return responseMessage(false, "User not found");

    if (user.email === newEmail) {
      return responseMessage(
        false,
        "New email cannot be the same as the old email"
      );
    }

    user.email = newEmail;

    const updateResponse = await fetch(`${url}/${userID}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });

    const updatedUser = await updateResponse.json();

    return responseMessage(true, {
      user: updatedUser.id,
      message: "Email changed successfully",
    });
  } catch (error) {}
};
export { getUsersById, changePassword, updateEmail };
