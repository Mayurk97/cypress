Feature: End to End E-commerce Validation

    Scenario Outline: Check Login with multiple users
        Given Check login validity on the Automation Site
        And User log-in using <username>
        And User log-in using password <password>
        When click on submit button
        Then Dashbord test should be visible

        Examples:
            | username               | password    |
            | mayurkadam215@gmail.com   | M@yur97123  |
            | kadammk24@gmail.com | M@yur971234 |