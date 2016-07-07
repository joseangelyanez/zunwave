import {Component, EventEmitter, Output } from '@angular/core';
import {OnInit}                  from '@angular/core';
import { ApiService }            from '../services/api.service'
import { Http }                  from '@angular/http';
import { Context }               from '../dataflip.typings';
import { MODAL_DIRECTIVES, ModalComponent } from 'ng2-bs3-modal/ng2-bs3-modal'

@Component({
    selector: 'bookentry',
    providers: [ApiService],
    styleUrls: ['app/components/bookentry.component.css'],
    templateUrl: 'app/components/bookentry.component.html',
    directives: [
        MODAL_DIRECTIVES
    ]
})
export class BookEntryComponent implements OnInit {
    public entry = new Context.CreateBook_Parameters();

    constructor(private _service: ApiService) { }

    handleCreateClick()
    {
        let params = new Context.CreateBook_Parameters();
        console.log("Well... It's about to call the API...");
        console.log(this.entry);

        this._service.createBook(this.entry).subscribe(
            () => { console.log("Done!"); }
        );
    }

    ngOnInit() {}
}
