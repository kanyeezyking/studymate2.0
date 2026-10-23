import { cpSync, writeFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const outDir = path.join(root, "dist-pages");
const viteBin = path.join(root, "node_modules/.bin/vite");

const result = spawnSync(
  process.execPath,
  [
    path.join(root, "scripts/with-app-env.mjs"),
    viteBin,
    "build",
    "--config",
    path.join(root, "vite.pages.config.ts"),
  ],
  { cwd: root, stdio: "inherit", env: process.env },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

cpSync(path.join(outDir, "index.html"), path.join(outDir, "404.html"));
writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("GitHub Pages SPA written to dist-pages/");
