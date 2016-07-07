import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { Context  }     from '../dataflip.typings'
import { BookEntryComponent } from './bookentry.component'

@Component({
    selector: 'booklist',
    providers: [ ApiService ],
    styleUrls: ['app/components/booklist.component.css'],
    templateUrl: 'app/components/booklist.component.html',
    directives: [
        BookEntryComponent
    ]
})
export class BooklistComponent implements OnInit {
    private books: Context.GetBooks_Result;

    constructor(private _service: ApiService) { }

    private renderPosts()
    {
        this._service.getSessionState().subscribe(
            (value) => {
                this.books = value.json().books;
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.renderPosts();
    }
}
