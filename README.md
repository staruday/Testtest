# Testtest
test

## HyperFrames + motion workspace

Packages: `hyperframes` (CLI), `gsap`, `puppeteer`, and `@fontsource` fonts (Fredoka, Space Grotesk, Inter, Poppins).
HyperFrames agent skills are vendored in `.claude/skills/`.

Setup (cloud or local):

```bash
./scripts/cloud-setup.sh
export HYPERFRAMES_BROWSER_PATH=/opt/pw-browsers/chromium-1194/chrome-linux/chrome
export CHROME_PATH=$HYPERFRAMES_BROWSER_PATH
```

The script runs `npm install` and copies GSAP and fonts into `assets/lib` and `assets/fonts`, since CDNs are blocked in the cloud.
