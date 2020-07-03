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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var calculator_1 = require("../pageObjects/calculator");
var protractor_1 = require("protractor");
var cucumber_1 = require("cucumber");
var angular_1 = require("../pageObjects/angular");
var chai_1 = __importDefault(require("chai"));
var expect = chai_1.default.expect;
var calc = new calculator_1.calculator();
var ang = new angular_1.angular();
cucumber_1.Given('Navigate to {string} site', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(string == "calc")) return [3 /*break*/, 2];
                return [4 /*yield*/, protractor_1.browser.get('http://juliemr.github.io/protractor-demo/')];
            case 1:
                _a.sent();
                return [3 /*break*/, 4];
            case 2:
                if (!(string == "angular")) return [3 /*break*/, 4];
                return [4 /*yield*/, protractor_1.browser.get('https://angularjs.org/')];
            case 3:
                _a.sent();
                _a.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('Numbers are added {string} and {string}', function (string, string2) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, calc.firstEditBox.sendKeys(string)];
            case 1:
                _a.sent();
                return [4 /*yield*/, calc.secondEditBox.sendKeys(string2)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.Then('the output displayed should be {string}', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, calc.go.click()];
            case 1:
                _a.sent();
                return [4 /*yield*/, calc.getResult.getText().then(function (text) {
                        expect(text).to.equal(string);
                    })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('clicked header link', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, ang.linkTxt.click()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
cucumber_1.When('will navigate to angular page', function () {
    console.log("You are on new page");
});
cucumber_1.Then('you will enter {string} in the search box', function (string) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
            case 1:
                _a.sent();
                return [4 /*yield*/, ang.searchTxt.sendKeys(string)];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3N0ZXBEZWZpbml0aW9ucy9zdGVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0RBQXVEO0FBQ3ZELHlDQUFxQztBQUNyQyxxQ0FBNkM7QUFDN0Msa0RBQWlEO0FBQ2pELDhDQUF5QjtBQUV6QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLElBQUksSUFBSSxHQUFFLElBQUksdUJBQVUsRUFBRSxDQUFDO0FBQzNCLElBQUksR0FBRyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBR3RCLGdCQUFLLENBQUMsMkJBQTJCLEVBQUUsVUFBTyxNQUFNOzs7O3FCQUN6QyxDQUFBLE1BQU0sSUFBSSxNQUFNLENBQUEsRUFBaEIsd0JBQWdCO2dCQUNyQixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQywyQ0FBMkMsQ0FBQyxFQUFBOztnQkFBOUQsU0FBOEQsQ0FBQzs7O3FCQUN2RCxDQUFBLE1BQU0sSUFBSSxTQUFTLENBQUEsRUFBbkIsd0JBQW1CO2dCQUMzQixxQkFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxFQUFBOztnQkFBM0MsU0FBMkMsQ0FBQzs7Ozs7S0FDN0MsQ0FBQyxDQUFDO0FBRUQsZUFBSSxDQUFDLHlDQUF5QyxFQUFFLFVBQU8sTUFBTSxFQUFFLE9BQU87OztvQkFDL0QscUJBQU0sSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLEVBQUE7O2dCQUF4QyxTQUF3QyxDQUFDO2dCQUNoRCxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsRUFBQTs7Z0JBQTFDLFNBQTBDLENBQUM7Ozs7S0FDckMsQ0FBQyxDQUFDO0FBR1osZUFBSSxDQUFDLHlDQUF5QyxFQUFFLFVBQU8sTUFBTTs7O29CQUN6RCxxQkFBTSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFBOztnQkFBckIsU0FBcUIsQ0FBQztnQkFDdEIscUJBQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxJQUFJO3dCQUdsRCxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDakMsQ0FBQyxDQUFDLEVBQUE7O2dCQUpFLFNBSUYsQ0FBQTs7OztLQUNDLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxxQkFBcUIsRUFBRTs7O29CQUMxQixxQkFBTSxHQUFHLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFBOztnQkFBekIsU0FBeUIsQ0FBQzs7OztLQUMzQixDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsK0JBQStCLEVBQUU7SUFDcEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0FBQ3BDLENBQUMsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDJDQUEyQyxFQUFFLFVBQU8sTUFBTTs7O29CQUMzRCxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7Z0JBQXpCLFNBQXlCLENBQUM7Z0JBQzVCLHFCQUFNLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFBOztnQkFBcEMsU0FBb0MsQ0FBQzs7OztLQUN0QyxDQUFDLENBQUMifQ==