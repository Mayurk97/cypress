Feature: Regres API

    Scenario: GET User Via API
        Given User send the request for get multiple users
        Then Users should be display


    Scenario Outline: Create User Via API

        Given User send the post request to create with <name> and <job>
        Then User should be created with <name> and <job>

        Examples:
            | name  | job            |
            | Kalu  | tester         |
            | mayur | QA             |
            | Rohan | devops         |
            | Pooja | cloud_engineer |