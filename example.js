
const puppeteer = require('puppeteer');

(async function main() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.goto('https://www.google.com');
    await page.screenshot({path: 'example.png'});

    await browser.close();

  } catch (e) {
    console.log('our error', e);
  }

})();
