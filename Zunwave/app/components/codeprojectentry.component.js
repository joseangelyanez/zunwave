var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', '../dataflip.typings', 'ng2-bs3-modal/ng2-bs3-modal'], function (require, exports, core_1, api_service_1, dataflip_typings_1, ng2_bs3_modal_1) {
    "use strict";
    var CodeProjectEntryComponent = (function () {
        function CodeProjectEntryComponent(_service) {
            this._service = _service;
            this.entry = new dataflip_typings_1.Context.CreateCodeProject_Parameters();
        }
        CodeProjectEntryComponent.prototype.handleCreateClick = function () {
            var params = new dataflip_typings_1.Context.CreateCodeProject_Parameters();
            console.log("Well... It's about to call the API...");
            console.log(this.entry);
            this._service.createCodeProject(this.entry).subscribe(function () { console.log("Done!"); });
        };
        CodeProjectEntryComponent.prototype.ngOnInit = function () { };
        CodeProjectEntryComponent = __decorate([
            core_1.Component({
                selector: 'codeprojectentry',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/codeprojectentry.component.css'],
                templateUrl: 'app/components/codeprojectentry.component.html',
                directives: [
                    ng2_bs3_modal_1.MODAL_DIRECTIVES
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], CodeProjectEntryComponent);
        return CodeProjectEntryComponent;
    }());
    exports.CodeProjectEntryComponent = CodeProjectEntryComponent;
});
//# sourceMappingURL=codeprojectentry.component.js.map