Feature: Ecommerce Site: OrangeHRM

    Scenario: Check Login with Valid Crendetials
        Given Visit orange HRM Site
        And Fill the username
        And Fill the password
        When Click on login button
        Then Validate the Dashbord text



    Scenario: Check Login with Invalid Crendetials
       Given Visit orange HRM Site
       And Fill the usernames
       And Fill the passwords
       When Click on login button
       Then Validate the Error Message