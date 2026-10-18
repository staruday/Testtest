#!/bin/bash
# Installs the HyperFrames + motion toolchain in a Claude Code cloud session.
set -euo pipefail
cd "$(dirname "$0")/.."

CHROME=/opt/pw-browsers/chromium-1194/chrome-linux/chrome

PUPPETEER_SKIP_DOWNLOAD=true npm install --no-audit --no-fund
npm run --silent setup:assets

# The default Chrome download is blocked in the cloud, so point both tools at the preinstalled Chromium.
if [ -n "${CLAUDE_ENV_FILE:-}" ]; then
  {
    echo "export HYPERFRAMES_BROWSER_PATH=$CHROME"
    echo "export CHROME_PATH=$CHROME"
    echo "export PUPPETEER_SKIP_DOWNLOAD=true"
  } >> "$CLAUDE_ENV_FILE"
fi
