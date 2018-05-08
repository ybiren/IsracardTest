var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var httpSrv_1 = require("./httpSrv");
var patient_1 = require("./patient");
var core_2 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent(httpSrv, componentFactoryResolver, viewContainerRef) {
        this.httpSrv = httpSrv;
        this.componentFactoryResolver = componentFactoryResolver;
        this.viewContainerRef = viewContainerRef;
        this.isSpinner = true;
    }
    AppComponent.prototype.calculateAge = function (birthday) {
        var ageDifMs = Date.now() - birthday.getTime();
        var ageDate = new Date(ageDifMs); // miliseconds from epoch
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.httpSrv.getData().then(function (data) {
            data = JSON.parse(data);
            for (var i = 0; i < data.patientinfo.length; i++) {
                var patientinfo = data.patientinfo[i];
                var factory = _this.componentFactoryResolver.resolveComponentFactory(patient_1.PatientComponent);
                var ref = _this.dynamicInsert.createComponent(factory);
                ref.changeDetectorRef.detectChanges();
                var instance = ref.instance;
                instance.firstName = patientinfo.firstName;
                instance.lastName = patientinfo.lastName;
                instance.mrn = patientinfo.mrn;
                instance.gender = patientinfo.gender.substring(0, 1);
                instance.age = _this.calculateAge(new Date(patientinfo.dateOfBirth));
                instance.comment = patientinfo.comment;
                instance.click.subscribe(function (patId) { return _this.httpSrv.trace(patId); });
            }
            _this.isSpinner = false;
        });
    };
    __decorate([
        core_2.ViewChild('dynamicInsert', { read: core_2.ViewContainerRef })
    ], AppComponent.prototype, "dynamicInsert", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            providers: [httpSrv_1.Httpsrv],
            template: "<ng-spinner [display]=\"isSpinner\"></ng-spinner><div class=\"content\" #dynamicInsert></div>"
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
