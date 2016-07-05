import {Component, EventEmitter, Output } from '@angular/core';
import {OnInit}                  from '@angular/core';
import { ApiService }            from '../services/api.service'
import { Http }                  from '@angular/http';
import { Context }               from '../dataflip.typings';


@Component({
    selector: 'postbox',
    providers: [ApiService],
    styleUrls: ['app/components/postbox.component.css'],
    templateUrl: 'app/components/postbox.component.html',
    directives: []
})
export class PostBoxComponent implements OnInit {
    public content: string;

    @Output()
    public onPost: EventEmitter<string> = new EventEmitter<string>();

    constructor(private _service: ApiService) { }

    handleClick()
    {
        let params = new Context.CreateActivity_Parameters();

        params.content          = this.content;
        params.userId           = 1;
        params.activityImage    = "noimage";
        params.activityType     = "POST";

        this._service.createActivity(params).subscribe(
            () => this.onPost.emit("created")
        );
    }

    ngOnInit() {}
}
