// Copies GSAP and font files out of node_modules into assets/, because CDNs are blocked in the cloud.
import { cpSync, mkdirSync, readdirSync } from "node:fs";

mkdirSync("assets/lib", { recursive: true });
mkdirSync("assets/fonts", { recursive: true });
cpSync("node_modules/gsap/dist/gsap.min.js", "assets/lib/gsap.min.js");

for (const family of ["fredoka", "space-grotesk", "inter", "poppins"]) {
  const dir = `node_modules/@fontsource/${family}/files`;
  for (const f of readdirSync(dir)) {
    if (/latin-(400|500|600|700)-normal\.woff2$/.test(f) && !f.includes("-ext-")) {
      cpSync(`${dir}/${f}`, `assets/fonts/${f}`);
    }
  }
}
console.log("assets ready");
