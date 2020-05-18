Feature: Perform action on event sources to enable sink to service
    As a developer I want to easily sink/connect event sources to service through a context menu on the right-click/action menu.

Background:
Given developer is on project topology page
And topology page should contain event source and sink connector

Scenario: Move the sink via gestures to link knative services
   Given knative service is present in topology page
   When developer selects the end point of sink connector
   And  drag onto the knative service
   Then connector should get connected to knative service
   And on hover it displays tooltip Move Sink

Scenario: Error should display on dragging the sink on to non knative services
   Given non knative service is present in the topology page
   When developer selects the end point of sink connector
   And  drag onto the non knative service
   Then error should be displayed

Scenario: Move the sink via context menu to link knative Service
   Given knative service is present in topology page
   When right click on the knative service 
   And  select the “Move Sink” from context menu
   Then modal should be displayed with the multiple new knative sink details existing/newly created knative services

Scenario: Non knative services should not display in “Move Sink” modal
   Given non knative service is present in topology page
   When right click on the knative service 
   And  select the “Move Sink” from context menu
   Then modal should be displayed
   And verify the non knative services display

Scenario: Move the sink via Action menu to link knative Service
   Given knative service is present in topology page
   When Select the action menu dropdown present in right hand side of the screen
   And  select the “Move Sink” from Action menu
   Then modal should be displayed with the multiple new knative sink details

