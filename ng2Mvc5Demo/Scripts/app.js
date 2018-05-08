"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var httpSrv_1 = require("./httpSrv");
var github_1 = require("./github");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent(httpSrv, componentFactoryResolver, viewContainerRef) {
        this.httpSrv = httpSrv;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.isSpinner = false;
        this.srchCrit = "";
    }
    AppComponent.prototype.getData = function () {
        var _this = this;
        if (this.srchCrit.trim().length > 0) {
            this.isSpinner = true;
            this.dynamicInsert.clear();
            this.httpSrv.getData(this.srchCrit).then(function (data) {
                data = JSON.parse(data);
                for (var i = 0; i < data.items.length; i++) {
                    var item = data.items[i];
                    _this.addItemToGallery(item.name, item.owner.avatar_url, true);
                }
                _this.isSpinner = false;
            });
        }
    };
    AppComponent.prototype.getBookmarks = function () {
        var _this = this;
        this.isSpinner = true;
        this.dynamicInsert.clear();
        this.httpSrv.getBookmarks().then(function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < data.length; i++) {
                _this.addItemToGallery(data[i].name, data[i].avatarUrl, false);
            }
        });
        this.isSpinner = false;
    };
    AppComponent.prototype.addItemToGallery = function (name, avatarUrl, showBMbtn) {
        var _this = this;
        var factory = this.componentFactoryResolver.resolveComponentFactory(github_1.GitHubComponent);
        var ref = this.dynamicInsert.createComponent(factory);
        ref.changeDetectorRef.detectChanges();
        var instance = ref.instance;
        instance.name = name;
        instance.avatar = avatarUrl;
        instance.showBMbtn = showBMbtn;
        instance.bmclick.subscribe(function (bookMark) { return _this.httpSrv.addBookMark(bookMark).then(function (data) {
            alert("Bookmark was added.");
        }); });
    };
    __decorate([
        core_3.ViewChild('dynamicInsert', { read: core_3.ViewContainerRef }),
        __metadata("design:type", Object)
    ], AppComponent.prototype, "dynamicInsert", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [httpSrv_1.Httpsrv],
            templateUrl: 'Scripts/templates/app.html',
            styleUrls: ['Scripts/css/repo.css']
        }),
        __metadata("design:paramtypes", [httpSrv_1.Httpsrv, core_2.ComponentFactoryResolver, core_3.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.js.map