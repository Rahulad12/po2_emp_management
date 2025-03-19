export const responseMessage = (success, message) => {
  const response = {
    success: success,
    message: message,
  };
  return response;
};
