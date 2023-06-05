Feature: Webdriver IO app test
  Scenario Outline: As a user, I can log in successfully
    Given app is open
    When entering email "tomsmith" and password "SuperSecretPassword!"
