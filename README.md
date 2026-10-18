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

## Remotion

Packages: `remotion`, `@remotion/cli`, `@remotion/renderer`, `@remotion/bundler` (4.0.536), React 19. Remotion agent skills are in `.claude/skills/remotion-*`.

- Compositions live in `remotion/src` (`Root.tsx` registers them; `Hello` is a 9:16 starter).
- `remotion.config.ts` points Remotion at the preinstalled headless Chromium, because its own Chrome download is blocked in the cloud.
- Render: `npx remotion render Hello out/hello.mp4` · Studio: `npm run remotion:studio`
