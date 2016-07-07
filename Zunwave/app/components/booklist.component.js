var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', './bookentry.component'], function (require, exports, core_1, api_service_1, bookentry_component_1) {
    "use strict";
    var BooklistComponent = (function () {
        function BooklistComponent(_service) {
            this._service = _service;
        }
        BooklistComponent.prototype.renderPosts = function () {
            var _this = this;
            this._service.getSessionState().subscribe(function (value) {
                _this.books = value.json().books;
            }, function (error) { }, function () { });
        };
        BooklistComponent.prototype.ngOnInit = function () {
            this.renderPosts();
        };
        BooklistComponent = __decorate([
            core_1.Component({
                selector: 'booklist',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/booklist.component.css'],
                templateUrl: 'app/components/booklist.component.html',
                directives: [
                    bookentry_component_1.BookEntryComponent
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], BooklistComponent);
        return BooklistComponent;
    }());
    exports.BooklistComponent = BooklistComponent;
});
//# sourceMappingURL=booklist.component.js.map