import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }               from '../services/api.service'
import { Http }                     from '@angular/http';
import { PostBoxComponent }         from '../components/postbox.component'
import { BooklistComponent }        from '../components/booklist.component'
import { CodeProjectListComponent } from '../components/codeprojectlist.component'
import { ArticleListComponent }     from '../components/articlelist.component'
import { SocialNetworkListComponent }   from '../components/socialnetworklist.component'
import { TechnologyListComponent }      from '../components/technologylist.component'
import { Context  }                     from '../dataflip.typings'

@Component({
    selector: 'board',
    providers: [ ApiService ],
    styleUrls: ['app/components/board.component.css'],
    templateUrl: 'app/components/board.component.html',

    directives: [
        PostBoxComponent,
        BooklistComponent,
        CodeProjectListComponent,
        ArticleListComponent,
        SocialNetworkListComponent,
        TechnologyListComponent
    ]
})
export class BoardComponent implements OnInit {
    public appUser: Context.GetAppUser_Result = new Context.GetAppUser_Result();

    constructor(private _service: ApiService) { }

    public handleOnPost(post: any)
    {
        console.log(post);
    }
    

    ngOnInit() {
        this._service.getSessionState().subscribe(
            (result) =>
            {
                this.appUser = result.json().appUser;
            },
            (error) => {
                    
            },
            () => {

            }
        );
    }
}
