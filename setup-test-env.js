// https://stackoverflow.com/a/67997819/9640026
import { loadEnvConfig } from "@next/env";

export default async () => {
  const projectDir = process.cwd();

  loadEnvConfig(projectDir);
};
