var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '@angular/http'], function (require, exports, core_1, http_1) {
    "use strict";
    var ApiService = (function () {
        function ApiService(_http) {
            this._http = _http;
        }
        ApiService.prototype.getActitvities = function () {
            return this._http.get('/api/data/GetActivities');
        };
        ApiService.prototype.getSessionState = function () {
            this.getSessionStateResult =
                this._http.get('/api/data/getsessionstate?userId=1');
            return this.getSessionStateResult;
        };
        ApiService.prototype.createArticle = function (args) {
            return this._http.post('/api/data/CreateArticle', args);
        };
        ApiService.prototype.createBook = function (args) {
            return this._http.post('/api/data/CreateBook', args);
        };
        ApiService.prototype.createCodeProject = function (args) {
            return this._http.post('/api/data/CreateCodeProject', args);
        };
        ApiService = __decorate([
            core_1.Injectable(), 
            __metadata('design:paramtypes', [http_1.Http])
        ], ApiService);
        return ApiService;
    }());
    exports.ApiService = ApiService;
});
//# sourceMappingURL=api.service.js.map