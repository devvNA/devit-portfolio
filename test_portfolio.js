const { Builder, By, Key, until } = require("selenium-webdriver");
const chrome = require("selenium-webdriver/chrome");
const chromedriver = require("chromedriver");

async function testPortfolioWebsite() {
  console.log("\n=== Memulai Test Portfolio Website ===");

  console.log("1. Inisialisasi WebDriver...");
  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().addArguments("--start-maximized"))
    .build();
  console.log("   ✓ WebDriver berhasil diinisialisasi");

  try {
    console.log("2. Membuka website...");
    await driver.get("http://10.196.250.53:3000/");
    await driver.manage().setTimeouts({ implicit: 10000 });
    console.log("   ✓ Website berhasil dibuka");

    console.log("3. Verifikasi judul halaman...");
    const title = await driver.getTitle();
    if (title.includes("Devit Nur Azaqi")) {
      console.log("   ✓ Judul halaman sesuai");
    } else {
      console.log("   ✗ Judul halaman tidak sesuai");
      await driver.quit();
      return;
    }

    console.log("4. Navigasi ke menu Contact...");
    const contactLink = await driver.findElement(By.linkText("Contact"));
    await contactLink.click();

    console.log("5. Mengisi form kontak...");
    try {
      const nameInput = await driver.wait(
        until.elementLocated(By.name("name")),
        10000,
      );
      const emailInput = await driver.wait(
        until.elementLocated(By.name("email")),
        10000,
      );
      const subjectInput = await driver.wait(
        until.elementLocated(By.name("subject")),
        10000,
      );
      const messageInput = await driver.wait(
        until.elementLocated(By.name("message")),
        10000,
      );

      await nameInput.sendKeys("Nama Tester");
      await driver.sleep(2000);
      await emailInput.sendKeys("tester@example.com");
      await driver.sleep(2000);
      await subjectInput.sendKeys("Test Contact");
      await driver.sleep(2000);
      await messageInput.sendKeys("Ini pesan dari automation test.");
      await driver.sleep(2000);
      console.log("   ✓ Form berhasil diisi");
    } catch (error) {
      console.log(`   ✗ Gagal mengisi form: ${error.message}`);
      await driver.quit();
      return;
    }

    const submitButton = await driver.wait(
      until.elementLocated(
        By.xpath("//button[contains(text(), 'Send Message')]"),
      ),
      10000,
    );

    console.log("   -> Scrolling to the bottom of the page...");
    await driver.executeScript(
      "window.scrollTo(0, document.body.scrollHeight);",
    );
    await driver.sleep(3000);

    console.log("6. Mengirim form...");
    try {
      await submitButton.click();
      console.log("   ✓ Form berhasil dikirim dengan click biasa");
    } catch (error) {
      try {
        await driver.executeScript("arguments[0].click();", submitButton);
        console.log("   ✓ Form berhasil dikirim dengan JavaScript click");
      } catch (error) {
        console.log(`   ✗ Gagal mengirim form: ${error.message}`);
      }
    }

    console.log("\n=== Test Selesai ===");
    await driver.sleep(5000);
  } finally {
    await driver.quit();
  }
}

// Jalankan test
testPortfolioWebsite().catch(console.error);
