Feature: Run the pipeline for Add git flow
    As a user I want to create the pipeline for public git repository and execute it

Background:
    Given openshift cluster is installed with pipeline operator

@e2e
Scenario Outline: Create the project namespace
    Given user is on dev perspective
    When user selects the "Create Project" option from Projects dropdown on top navigation bar
    And type "Name" as "<project_name>" in "Create Project" popup
    And type "Display name" as "<display_name>" in "Create Project" popup
    And click "Create" button present in "Create Project" popup
    Then popup should get closed
    And user navigated to Topology page with message "No workloads found"

Examples:
| project_name   | display_name |
| AUT_MB_project | automation1  |

@e2e
Scenario Outline: Create the project namespace
    Given user is on dev perspective
    When user selects the "Create Project" option from Projects dropdown on top navigation bar
    And type "Name" as "<project_name>" in "Create Project" popup
    And type "Display name" as "<display_name>" in "Create Project" popup
    And click "Create" button present in "Create Project" popup
    Then popup should get closed
    And user navigated to Topology page with message "No workloads found"

Examples:
| project_name   | display_name |
| AUT_MB_project | automation1  |

@e2e
Scenario Outline: Create a pipeline with git work load 
   Given user is on "<form_name>" form with header name "<header_name>"
   When user type "Git Repo url" as "<git_url>"
   And select "Deployment" radio button in Resources section
   And select "Add Pipeline" checkbox in Pipelines section
   And click "Create" button on Add page
   Then user navigates to topology page
   And created workload is present in topology page

Examples:
| form_name | header_name     | git_url                                 | 
| git       | Import from git | https://github.com/sclorg/nodejs-ex.git |

@e2e
Scenario Outline: Start the pipeline in Pipelines page
    Given user is on "Pipelines" page
    When user searches for the application name "<application_name>"
    And selects the "start" option from the kebab menu of the displayed pipeline
    Then popup displayed with header name "Start Pipeline"
    And "APP_NAME" should be displayed
    And "app-source", "app-image" dropdowns are auto selected
    When user clicks on "Start" button present on "Start Pipeline" popup
    Then user naivgates to "Pipeline Run Details" page
    And pipeline status displays as "<pipeline_status>"    

Examples:
| application_name | pipeline_status |
| nodejs-ex-git-1  | Running         |

Scenario Outline: Verify the pipeline status completion
    Given user is on "Pipeline Run Details" page
    
