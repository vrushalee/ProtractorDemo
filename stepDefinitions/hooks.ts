
import {After,Before, Status} from "cucumber";
import { browser } from "protractor";

After(async function(scenario) {
    // This hook will be executed before scenarios tagged with @foo
    console.log("Test is completed");
    if (scenario.result.status=== Status.FAILED)
    {
      //code to take screesnhot
     const screenshot= await browser.takeScreenshot();
   
          this.attach(screenshot,"image/png");
    }
  
  
  });
  
  
  
  
  
  