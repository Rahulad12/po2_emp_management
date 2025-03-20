import { defineConfig } from "vite";
export default defineConfig({
  build: {
    outDir: "dist",
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: "index.html",
        login: "/src/screen/userLogin.html",
        register: "/src/screen/userRegister.html",
        dashboard: "/src/screen/employeeDashboard.html",
        setting: "/src/screen/employeeSettingDashboard.html",
      },
    },
  },
});
