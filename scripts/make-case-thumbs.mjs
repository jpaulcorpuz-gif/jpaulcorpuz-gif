// Renders the case-study pages in public/case-studies/ to JPEGs: small ones for
// the Home "Projects" card (public/home/case-<name>.jpeg) and full-size ones for
// the Projects "Case studies" strip (public/case-studies/shots/<name>.jpeg).
// Run after editing them:
//   node scripts/make-case-thumbs.mjs
import { chromium } from 'playwright'
import { mkdirSync, readdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public')
const dir = join(pub, 'case-studies')
// CHROMIUM_PATH lets you point at an already-installed browser.
const browser = await chromium.launch(
  process.env.CHROMIUM_PATH ? { executablePath: process.env.CHROMIUM_PATH } : {},
)
mkdirSync(join(dir, 'shots'), { recursive: true })
for (const file of readdirSync(dir).filter((f) => f.endsWith('.html'))) {
  const name = file.replace('.html', '.jpeg')
  for (const [out, scale] of [
    [join(pub, 'home', `case-${name}`), 400 / 1280],
    [join(dir, 'shots', name), 1],
  ]) {
    const page = await browser.newPage({ viewport: { width: 1280, height: 800 }, deviceScaleFactor: scale })
    await page.goto(pathToFileURL(join(dir, file)).href)
    await page.screenshot({ path: out, type: 'jpeg', quality: 82 })
    await page.close()
  }
}
await browser.close()
