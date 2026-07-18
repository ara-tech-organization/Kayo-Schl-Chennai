
const { chromium } = require("playwright");
const path = require("path");
const OUT = "C:\\Users\\karth\\AppData\\Local\\Temp\\claude\\c--Users-karth-OneDrive-Documents-Ara-Kayo-School-Chennai\\f4b577be-4723-4dc2-b1bd-a57a8310714b\\scratchpad";
const URL = "http://localhost:5210/perungudi/";

async function revealAll(page) {
  const height = await page.evaluate(() => document.body.scrollHeight);
  for (let y = 0; y < height; y += 300) {
    await page.evaluate((yy) => window.scrollTo(0, yy), y);
    await page.waitForTimeout(140);
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(400);
}

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  await page.goto(URL, { waitUntil: "load", timeout: 60000 });
  await page.waitForTimeout(1200);
  await revealAll(page);
  const errors = [];
  page.on("console", (msg) => { if (msg.type() === "error") errors.push(msg.text()); });
  await page.reload({ waitUntil: "load" });
  await page.waitForTimeout(1200);
  await revealAll(page);
  await page.screenshot({ path: path.join(OUT, "final-full.png"), fullPage: true });
  console.log("console errors:", errors);
  await browser.close();
  console.log("done");
})();
