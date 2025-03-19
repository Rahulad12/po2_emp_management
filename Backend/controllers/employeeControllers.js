import { responseMessage } from "../utils/ResponseMessage.js";

export const getEmployee = async (url, userID) => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    const employee = result.find((emp) => emp.userID === userID);
    if (!employee) return responseMessage(false, "Employee not found");

    return responseMessage(true, employee);
  } catch (error) {
    return responseMessage(false, error.message);
  }
};

export const getAllEmployee = async (url) => {
  try {
    const response = await fetch(url);
    const result = await response.json();

    if (response.ok) {
      return responseMessage(true, {
        data: result,
        message: "Successfully Fetching Employee",
      });
    }
  } catch (error) {
    return responseMessage(false, error.message);
  }
};
