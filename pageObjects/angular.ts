import { ElementFinder, element,by } from "protractor";
export class angular
{
linkTxt:ElementFinder;
searchTxt:ElementFinder;

constructor(){
    this.linkTxt = element(by.linkText("angular.io"));
    this.searchTxt = element(by.css("input[type='search']"))
}
   
}