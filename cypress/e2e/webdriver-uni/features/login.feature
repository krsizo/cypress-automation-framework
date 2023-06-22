@regression
Feature: WebdriverUniversity Login Page

    # Scenario: Login using valid credentials
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following message validation succeeded

    # Scenario: Login using valid username and invalid password
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username webdriver
    #     And I enter a password webdriver555
    #     And I click on the login button
    #     Then I should be presented with the following message validation failed

    # Scenario: Login using invalid username and valid password
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username joe_blogs
    #     And I enter a password webdriver123
    #     And I click on the login button
    #     Then I should be presented with the following message validation failed

    # Scenario: Login using invalid username and invalid password
    #     Given I access the WebdriverUniversity Login Portal Page
    #     When I enter a username joe_blogs
    #     And I enter a password webdriver555
    #     And I click on the login button
    #     Then I should be presented with the following message validation failed

    Scenario Outline: Test Login via WebdriverUniversity Login Portal
        Given I access the WebdriverUniversity Login Portal Page
        When I enter a username <username>
        And I enter a password <password>
        And I click on the login button
        Then I should be presented with the following message <message>

        Examples:
            | username  | password     | message              |
            | webdriver | webdriver123 | validation succeeded |
            | webdriver | webdriver555 | validation failed    |
            | joe_blogs | webdriver123 | validation failed    |
            | joe_blogs | webdriver555 | validation failed    |