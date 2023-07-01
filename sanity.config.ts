import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
  projectId: "emwximhy",
  dataset: "production",
  title: "Movie Blog",
  apiVersion: "2021-03-25",
  basePath: "/admin",
  plugins: [deskTool()],
});

export default config;
