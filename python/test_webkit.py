from selenium import webdriver
driver = webdriver.Chrome()
driver.get("https://www.bitbar.com/enterprise/")
line = driver.find_elements_by_css_selector(".b-cta__content > h2:nth-child(1)")
for line in line:
  print(line.text.strip())
driver.quit()