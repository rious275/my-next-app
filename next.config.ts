import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

if (process.env.NODE_ENV === "development") {
  setupDevPlatform()
    .then(() => {
      // Development platform setup complete
    })
    .catch(error => {
      console.error("Failed to setup development platform:", error);
    });
}

export default nextConfig;
