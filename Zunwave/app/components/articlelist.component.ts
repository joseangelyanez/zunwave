import { Component, ViewChild, OnInit }    from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { Context  }     from '../dataflip.typings'
import { ArticleEntryComponent } from './articleentry.component'
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'

@Component({
    selector: 'articlelist',
    providers: [ ApiService ],
    styleUrls: ['app/components/articlelist.component.css'],
    templateUrl: 'app/components/articlelist.component.html',
    directives: [
        ArticleEntryComponent, MODAL_DIRECTIVES
    ]
})
export class ArticleListComponent implements OnInit {
    private articles: Context.GetArticles_Parameters;

    constructor(private _service: ApiService) { }

    private initialize()
    {
        this._service.getSessionState().subscribe(
            (value) => {
                this.articles = value.json().articles;
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.initialize();
    }
}
