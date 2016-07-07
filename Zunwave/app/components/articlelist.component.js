var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', './articleentry.component', 'ng2-bs3-modal/ng2-bs3-modal'], function (require, exports, core_1, api_service_1, articleentry_component_1, ng2_bs3_modal_1) {
    "use strict";
    var ArticleListComponent = (function () {
        function ArticleListComponent(_service) {
            this._service = _service;
        }
        ArticleListComponent.prototype.initialize = function () {
            var _this = this;
            this._service.getSessionState().subscribe(function (value) {
                _this.articles = value.json().articles;
            }, function (error) { }, function () { });
        };
        ArticleListComponent.prototype.ngOnInit = function () {
            this.initialize();
        };
        ArticleListComponent = __decorate([
            core_1.Component({
                selector: 'articlelist',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/articlelist.component.css'],
                templateUrl: 'app/components/articlelist.component.html',
                directives: [
                    articleentry_component_1.ArticleEntryComponent, ng2_bs3_modal_1.MODAL_DIRECTIVES
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], ArticleListComponent);
        return ArticleListComponent;
    }());
    exports.ArticleListComponent = ArticleListComponent;
});
//# sourceMappingURL=articlelist.component.js.map