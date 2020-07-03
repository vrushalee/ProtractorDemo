import {browser,element,by} from "protractor"
import { calculator } from "./pageObjects/calculator";
import { angular } from "./pageObjects/angular";
describe('Chain locators demo',function() {  


    it('Open Angular js website',async()=> {
        let calc= new calculator();
    await browser.get('http://juliemr.github.io/protractor-demo/');
    //repeater ,  chain locators, And css for identical tags
    await calc.firstEditBox.sendKeys("3");
   await calc.secondEditBox.sendKeys("5");
    
    await calc.go.click();
    
   calc.getResult.getText().then(function(text)
    {
    
    console.log(text);
    })
    
    
    // element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
    
    
    
    
    
    
    
    })
    
    it('Angular Home Page Validation',async()=>{
        let ang= new angular();
  await  browser.get("https://angularjs.org/");
   await ang.linkTxt.click();
    await ang.searchTxt.sendKeys("angular");


    })
})
    