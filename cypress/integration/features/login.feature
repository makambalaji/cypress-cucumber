Feature: Login to Application

    As a valid user
    I want to log in to the Application

    @login
    Scenario Outline: Valid Login
        Given I open the login Page
        When I enter a username "<userName>"
        And I enter a password "<password>"
        And I click the sign-in button
        Then I should be able to login

Examples:
| userName   | password |
| kubeadmin  | aaa      |

    @login-1
    Scenario: Invalid Login
        Given I open the login Page
        When I enter a username "kubeadmin"
        And I enter a password "aaa"
        And I click the sign-in button
        Then I should be able to login
