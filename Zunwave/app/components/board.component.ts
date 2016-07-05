import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { PostBoxComponent }      from '../components/postbox.component'
import { Context  }     from '../dataflip.typings'

@Component({
    selector: 'board',
    providers: [ ApiService ],
    styleUrls: ['app/components/board.component.css'],
    templateUrl: 'app/components/board.component.html',

    directives: [
        PostBoxComponent
    ]
})
export class BoardComponent implements OnInit {
    public activities: Array<Context.GetActivities_Result> = [];

    constructor(private _service: ApiService) { }

    public handleOnPost(post: any)
    {
        console.log(post);
        this.renderPosts();
    }

    private renderPosts()
    {
        this._service.getActitvities().subscribe(
            (value) => {
                this.activities = value.json();
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.renderPosts();
    }
}
