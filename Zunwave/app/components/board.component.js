var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', '../components/postbox.component'], function (require, exports, core_1, api_service_1, postbox_component_1) {
    "use strict";
    var BoardComponent = (function () {
        function BoardComponent(_service) {
            this._service = _service;
            this.activities = [];
        }
        BoardComponent.prototype.handleOnPost = function (post) {
            console.log(post);
            this.renderPosts();
        };
        BoardComponent.prototype.renderPosts = function () {
            var _this = this;
            this._service.getActitvities().subscribe(function (value) {
                _this.activities = value.json();
            }, function (error) { }, function () { });
        };
        BoardComponent.prototype.ngOnInit = function () {
            this.renderPosts();
        };
        BoardComponent = __decorate([
            core_1.Component({
                selector: 'board',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/board.component.css'],
                templateUrl: 'app/components/board.component.html',
                directives: [
                    postbox_component_1.PostBoxComponent
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], BoardComponent);
        return BoardComponent;
    }());
    exports.BoardComponent = BoardComponent;
});
//# sourceMappingURL=board.component.js.map