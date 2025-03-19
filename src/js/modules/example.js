import {
  getUserByIdApi,
  changePasswordApi,
  updateEmailApi,
} from "../api/userApi.js";

const userID = "c155";

(async () => {
  const userByID = await getUserByIdApi(userID);
  const data = userByID?.message;

  const { email, password, address } = data;
  //   console.log(email, password, (address = "kathmandu")); //it will throw Typeerror beacuse Assinging to the constant variable

  //   let { email, address, password } = data;
  console.log(address ?? "Address not found");

  console.log(address || "Address not found");
})();

const isLoading = false;

!isLoading && console.log("Not loading");

const error = "user is not define";

error && console.log("error has occured");
