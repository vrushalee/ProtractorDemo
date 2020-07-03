"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var calculator_1 = require("./pageObjects/calculator");
var angular_1 = require("./pageObjects/angular");
describe('Chain locators demo', function () {
    var _this = this;
    it('Open Angular js website', function () { return __awaiter(_this, void 0, void 0, function () {
        var calc;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    calc = new calculator_1.calculator();
                    return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
                case 1:
                    _a.sent();
                    //repeater ,  chain locators, And css for identical tags
                    return [4 /*yield*/, calc.firstEditBox.sendKeys("3")];
                case 2:
                    //repeater ,  chain locators, And css for identical tags
                    _a.sent();
                    return [4 /*yield*/, calc.secondEditBox.sendKeys("5")];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, calc.go.click()];
                case 4:
                    _a.sent();
                    calc.getResult.getText().then(function (text) {
                        console.log(text);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
    it('Angular Home Page Validation', function () { return __awaiter(_this, void 0, void 0, function () {
        var ang;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    ang = new angular_1.angular();
                    return [4 /*yield*/, protractor_1.browser.get("https://angularjs.org/")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, ang.linkTxt.click()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, ang.searchTxt.sendKeys("angular")];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUE2QztBQUM3Qyx1REFBc0Q7QUFDdEQsaURBQWdEO0FBQ2hELFFBQVEsQ0FBQyxxQkFBcUIsRUFBQztJQUFBLGlCQXFDOUI7SUFsQ0csRUFBRSxDQUFDLHlCQUF5QixFQUFDOzs7OztvQkFDckIsSUFBSSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO29CQUMvQixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxFQUFBOztvQkFBOUQsU0FBOEQsQ0FBQztvQkFDL0Qsd0RBQXdEO29CQUN4RCxxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBQTs7b0JBRHJDLHdEQUF3RDtvQkFDeEQsU0FBcUMsQ0FBQztvQkFDdkMscUJBQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUE7O29CQUF0QyxTQUFzQyxDQUFDO29CQUV0QyxxQkFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFBOztvQkFBckIsU0FBcUIsQ0FBQztvQkFFdkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO3dCQUcxQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUNsQixDQUFDLENBQUMsQ0FBQTs7OztTQVdELENBQUMsQ0FBQTtJQUVGLEVBQUUsQ0FBQyw4QkFBOEIsRUFBQzs7Ozs7b0JBQzFCLEdBQUcsR0FBRSxJQUFJLGlCQUFPLEVBQUUsQ0FBQztvQkFDN0IscUJBQU8sb0JBQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLENBQUMsRUFBQTs7b0JBQTVDLFNBQTRDLENBQUM7b0JBQzVDLHFCQUFNLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUN6QixxQkFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBQTs7b0JBQXZDLFNBQXVDLENBQUM7Ozs7U0FHdkMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyxDQUFDLENBQUEifQ==