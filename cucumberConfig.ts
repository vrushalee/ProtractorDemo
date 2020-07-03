import {Config} from 'protractor';
var reporter = require('cucumber-html-reporter');


export let config: Config = {
    directConnect: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  capabilities: {
    browserName: 'firefox'
  },
  specs: [ '../features/demo.feature' ],
  cucumberOpts: {
      
    // require step definitions
  //  tags:"@CalculatorTesting",
    format: 'json:./cucumber_report.json',
    require: [
      './stepDefinitions/*.js' // accepts a glob
    ]
  },
    onComplete: () =>{
        var options = {
            theme: 'bootstrap',
            jsonFile: './cucumber_report.json',
            output: './cucumber_report.html',
            reportSuiteAsScenarios: true,
            scenarioTimestamp: true,
            launchReport: true,
            metadata: {
                "App Version":"0.3.2",
                "Test Environment": "STAGING",
                "Browser": "Firefox ",
                "Platform": "Windows 10",
                "Parallel": "Scenarios",
                "Executed": "Remote"
            }
        };
 
    reporter.generate(options);
    },
  

  // You could set no globals to true to avoid jQuery '$' and protractor '$'
  // collisions on the global namespace.
  noGlobals: true
};