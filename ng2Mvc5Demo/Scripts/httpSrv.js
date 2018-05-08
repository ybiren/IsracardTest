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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var Httpsrv = /** @class */ (function () {
    function Httpsrv(http) {
        this.http = http;
    }
    Httpsrv.prototype.getData = function (srchCrit) {
        var url = "https://api.github.com/search/repositories?q=" + srchCrit;
        return this.sendReq(url);
    };
    Httpsrv.prototype.getBookmarks = function () {
        var url = "/BookMark/Get";
        return this.sendReq(url);
    };
    Httpsrv.prototype.addBookMark = function (bookMark) {
        var url = "/BookMark/Add?name=" + bookMark.name + "&avatarUrl=" + bookMark.avatar;
        return this.sendReq(url);
    };
    Httpsrv.prototype.sendReq = function (url) {
        return this.http.get(url).toPromise().then(this.extractData).catch(this.handleErrorPromise);
    };
    Httpsrv.prototype.extractData = function (res) {
        var body = res._body;
        return body;
    };
    Httpsrv.prototype.handleErrorPromise = function (error) {
        console.log(error);
        alert(error.status);
        console.error(error.message || error);
        return Rx_1.Observable.throw(error.message || error);
    };
    Httpsrv = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], Httpsrv);
    return Httpsrv;
}());
exports.Httpsrv = Httpsrv;
//# sourceMappingURL=httpSrv.js.map