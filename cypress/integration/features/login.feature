Feature: Login to Application

    As a valid user
    I want to log in to the Application

    @smoke
    Scenario Outline: Valid Login
        Given I open the login Page
        When I enter a username "<userName>"
        And I enter a password "<password>"
        And I click the sign-in button
        Then I should be able to login

Examples:
| userName   | password                 |
| kubeadmin  | fLbUI-MNrAn-sR5V6-S94Pw  |

    @regression
    Scenario Outline: Invalid Login
        Given I open the login Page
        When I enter a username "<userName>"
        And I enter a password "<password>"
        And I click the sign-in button
        Then error should displayed as "<error_message>"

Examples:
| userName   | password                 | error_message                                |
| kubeadmin  | xM3si-ii9Gn-AFku2-edeMb  | Invalid login or password. Please try again. |
|     a      | xM3si-ii9Gn-AFku2-edeMb  | Invalid login or password. Please try again. |
| kubeadmin  |            a             | An authentication error occurred.            |