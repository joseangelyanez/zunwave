import { Component, ViewContainerRef }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { Context  }     from '../dataflip.typings';

@Component({
    selector: 'socialnetworklist',
    providers: [ApiService ],
    styleUrls: ['app/components/socialnetworklist.component.css'],
    templateUrl: 'app/components/socialnetworklist.component.html',
    directives: []
})
export class SocialNetworkListComponent implements OnInit {
    private socialNetworks: Context.GetSocialNetworks_Result;
    constructor(private _service: ApiService) {
    }

    private initialize()
    {
        this._service.getSessionState().subscribe(
            (value) => {
                this.socialNetworks = value.json().socialNetworks;
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.initialize();
    }
}
