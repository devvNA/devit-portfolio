from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager
from selenium.webdriver.chrome.service import Service
import time

def test_portfolio_website():
    print("\n=== Memulai Test Portfolio Website ===")

    print("1. Inisialisasi WebDriver...")
    service = Service(ChromeDriverManager().install())
    driver = webdriver.Chrome(service=service)
    driver.maximize_window()
    print("   ✓ WebDriver berhasil diinisialisasi")

    print("2. Membuka website...")
    driver.get("http://10.196.250.53:3000/")
    driver.implicitly_wait(10)
    print("   ✓ Website berhasil dibuka")

    print("3. Verifikasi judul halaman...")
    try:
        assert "Devit Nur Azaqi" in driver.title
        print("   ✓ Judul halaman sesuai")
    except AssertionError:
        print("   ✗ Judul halaman tidak sesuai")
        driver.quit()
        return

    print("4. Navigasi ke menu Contact...")
    contact_link = driver.find_element(By.LINK_TEXT, "Contact")
    contact_link.click()

    # Tunggu form contact muncul
    wait = WebDriverWait(driver, 10)

    print("5. Mengisi form kontak...")
    try:
        name_input = wait.until(EC.presence_of_element_located((By.NAME, "name")))
        email_input = wait.until(EC.presence_of_element_located((By.NAME, "email")))
        subject_input = wait.until(EC.presence_of_element_located((By.NAME, "subject")))
        message_input = wait.until(EC.presence_of_element_located((By.NAME, "message")))

        name_input.send_keys("Nama Tester")
        time.sleep(2)
        email_input.send_keys("tester@example.com")
        time.sleep(2)
        subject_input.send_keys("Test Contact")
        time.sleep(2)
        message_input.send_keys("Ini pesan dari automation test.")
        time.sleep(2)
        print("   ✓ Form berhasil diisi")
    except Exception as e:
        print(f"   ✗ Gagal mengisi form: {str(e)}")
        driver.quit()
        return

    # Tombol submit
    submit_button = wait.until(EC.element_to_be_clickable((By.XPATH, "//button[contains(text(), 'Send Message')]")))

    print("   -> Scrolling to the bottom of the page...")
    # Scroll
    driver.execute_script("window.scrollTo(1, document.body.scrollHeight)oka;")

    driver.implicitly_wait(3)

    print("6. Mengirim form...")
    try:
        submit_button.click()
        print("   ✓ Form berhasil dikirim dengan click biasa")
    except:
        try:
            driver.execute_script("arguments[0].click();", submit_button)
            print("   ✓ Form berhasil dikirim dengan JavaScript click")
        except Exception as e:
            print(f"   ✗ Gagal mengirim form: {str(e)}")

    print("\n=== Test Selesai ===")

    # Tunggu beberapa saat untuk melihat hasilnya
    driver.implicitly_wait(5)

if __name__ == "__main__":
    test_portfolio_website()
