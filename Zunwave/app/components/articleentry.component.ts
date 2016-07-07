import {Component, EventEmitter, Output, ViewChild } from '@angular/core';
import {OnInit}                  from '@angular/core';
import { ApiService }            from '../services/api.service'
import { Http }                  from '@angular/http';
import { Context }               from '../dataflip.typings';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'

@Component({
    selector: 'articleentry',
    providers: [ApiService],
    styleUrls: ['app/components/articleentry.component.css'],
    templateUrl: 'app/components/articleentry.component.html',
    directives: [
        MODAL_DIRECTIVES
    ]
})
export class ArticleEntryComponent implements OnInit {
    @ViewChild('modal3') modal: ModalComponent;

    public entry = new Context.CreateArticle_Parameters();

    constructor(private _service: ApiService) { }

    handleCreateClick()
    {
        let params = new Context.CreateArticle_Parameters();
        console.log("Well... It's about to call the API...");
        console.log(this.entry);

        this._service.createArticle(this.entry).subscribe(
            () => { console.log("Done!"); }
        );
    }

    ngOnInit() {}
}
