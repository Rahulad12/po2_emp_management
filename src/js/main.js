import "../css/main.css";
import { isLoggedIn } from "./utils/helper.js";
import { manageBaseUrl } from "./utils/manageBaseUrl.js";

manageBaseUrl();

if (isLoggedIn()) {
  window.location.href = `${
    import.meta.env.BASE_URL
  }src/screen/employeeDashboard.html`;
}
