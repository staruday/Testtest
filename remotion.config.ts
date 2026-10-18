import { Config } from "@remotion/cli/config";

// Remotion's own Chrome download is blocked in the cloud; use the preinstalled headless shell.
Config.setBrowserExecutable("/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell");
Config.setEntryPoint("remotion/src/index.ts");
