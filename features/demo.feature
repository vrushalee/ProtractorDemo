Feature: Validating website functionalities
@CalculatorTesting

Scenario: Validate calculator Add Functionality
Given Navigate to "calc" site
When Numbers are added "3" and "5"
Then the output displayed should be "8"

@CalculatorTesting
Scenario: Validate calculator Add Functionality
Given Navigate to "calc" site
When Numbers are added "3" and "4"
Then the output displayed should be "9"

@AngularTesting
Scenario: Validate angular JS functionality
Given Navigate to "angular" site
When clicked header link
And will navigate to angular page
Then you will enter "hello" in the search box

