var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define(["require", "exports", '@angular/core', '../services/api.service', '../components/postbox.component', '../components/booklist.component', '../components/codeprojectlist.component', '../components/articlelist.component', '../components/socialnetworklist.component', '../components/technologylist.component', '../dataflip.typings'], function (require, exports, core_1, api_service_1, postbox_component_1, booklist_component_1, codeprojectlist_component_1, articlelist_component_1, socialnetworklist_component_1, technologylist_component_1, dataflip_typings_1) {
    "use strict";
    var BoardComponent = (function () {
        function BoardComponent(_service) {
            this._service = _service;
            this.appUser = new dataflip_typings_1.Context.GetAppUser_Result();
        }
        BoardComponent.prototype.handleOnPost = function (post) {
            console.log(post);
        };
        BoardComponent.prototype.ngOnInit = function () {
            var _this = this;
            this._service.getSessionState().subscribe(function (result) {
                _this.appUser = result.json().appUser;
            }, function (error) {
            }, function () {
            });
        };
        BoardComponent = __decorate([
            core_1.Component({
                selector: 'board',
                providers: [api_service_1.ApiService],
                styleUrls: ['app/components/board.component.css'],
                templateUrl: 'app/components/board.component.html',
                directives: [
                    postbox_component_1.PostBoxComponent,
                    booklist_component_1.BooklistComponent,
                    codeprojectlist_component_1.CodeProjectListComponent,
                    articlelist_component_1.ArticleListComponent,
                    socialnetworklist_component_1.SocialNetworkListComponent,
                    technologylist_component_1.TechnologyListComponent
                ]
            }), 
            __metadata('design:paramtypes', [api_service_1.ApiService])
        ], BoardComponent);
        return BoardComponent;
    }());
    exports.BoardComponent = BoardComponent;
});
//# sourceMappingURL=board.component.js.map