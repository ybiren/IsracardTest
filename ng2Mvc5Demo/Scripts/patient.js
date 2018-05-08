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
var core_2 = require("@angular/core");
var PatientComponent = /** @class */ (function () {
    function PatientComponent() {
        this.click = new core_2.EventEmitter();
    }
    PatientComponent.prototype.handleEvent = function () {
        this.click.emit(this.mrn);
    };
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PatientComponent.prototype, "firstName", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PatientComponent.prototype, "lastName", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PatientComponent.prototype, "mrn", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", Number)
    ], PatientComponent.prototype, "age", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PatientComponent.prototype, "gender", void 0);
    __decorate([
        core_2.Input(),
        __metadata("design:type", String)
    ], PatientComponent.prototype, "comment", void 0);
    __decorate([
        core_2.Output(),
        __metadata("design:type", core_2.EventEmitter)
    ], PatientComponent.prototype, "click", void 0);
    PatientComponent = __decorate([
        core_1.Component({
            selector: 'patient-dtls',
            templateUrl: 'Scripts/templates/patient.html',
            styleUrls: ['Scripts/css/patient.css']
        }),
        __metadata("design:paramtypes", [])
    ], PatientComponent);
    return PatientComponent;
}());
exports.PatientComponent = PatientComponent;
//# sourceMappingURL=patient.js.map