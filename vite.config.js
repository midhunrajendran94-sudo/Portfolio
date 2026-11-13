import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const root = path.dirname(fileURLToPath(import.meta.url));
const hasProfilePhoto = fs.existsSync(path.join(root, "public", "images", "profile.jpg"));
const hasResume = fs.existsSync(
  path.join(root, "public", "resume", "Midhun_Rajendran_Resume.pdf"),
);

export default defineConfig({
  plugins: [react()],
  define: {
    "import.meta.env.VITE_HAS_PROFILE_PHOTO": JSON.stringify(hasProfilePhoto ? "true" : "false"),
    "import.meta.env.VITE_HAS_RESUME": JSON.stringify(hasResume ? "true" : "false"),
  },
});
