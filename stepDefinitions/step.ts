import { calculator } from "../pageObjects/calculator";
import { browser } from 'protractor';
import { Given, When, Then } from "cucumber";
import { angular } from "../pageObjects/angular";
import  chai from "chai";

var expect = chai.expect;
let calc= new calculator();
let ang = new angular();


  Given('Navigate to {string} site', async (string) =>{
      if(string == "calc")
    await browser.get('http://juliemr.github.io/protractor-demo/');
    else if(string == "angular")
    await browser.get('https://angularjs.org/');
  });

    When('Numbers are added {string} and {string}', async (string, string2)=> {
           await calc.firstEditBox.sendKeys(string);
    await calc.secondEditBox.sendKeys(string2);
         });


Then('the output displayed should be {string}', async (string) =>{
    await calc.go.click();
    await calc.getResult.getText().then(function(text)
{

   expect(text).to.equal(string);
})
  });


  When('clicked header link', async () =>{
    await ang.linkTxt.click();
  });

  When('will navigate to angular page', function () {
    console.log("You are on new page")
  });

  Then('you will enter {string} in the search box', async (string) =>{
      await browser.sleep(5000);
    await ang.searchTxt.sendKeys(string);
  });