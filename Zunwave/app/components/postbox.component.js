var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service'], function (require, exports, core_1, api_service_1) {
    "use strict";
    var PostBoxComponent = (function () {
        function PostBoxComponent(_service) {
            this._service = _service;
            this.onPost = new core_1.EventEmitter();
        }
        PostBoxComponent.prototype.handleClick = function () {
            var params = {};
            params.content = this.content;
            params.userId = 1;
            params.activityImage = "noimage";
            params.activityType = "POST";
            /*
            this._service.createActivity(params).subscribe(
                () => this.onPost.emit("created")
            );*/
        };
        PostBoxComponent.prototype.ngOnInit = function () { };
        __decorate([
            core_1.Output(), 
            __metadata('design:type', core_1.EventEmitter)
        ], PostBoxComponent.prototype, "onPost", void 0);
        PostBoxComponent = __decorate([
            core_1.Component({
                selector: 'postbox',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/postbox.component.css'],
                templateUrl: 'app/components/postbox.component.html',
                directives: []
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], PostBoxComponent);
        return PostBoxComponent;
    }());
    exports.PostBoxComponent = PostBoxComponent;
});
//# sourceMappingURL=postbox.component.js.map