import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { Context  }     from '../dataflip.typings'

@Component({
    selector: 'technologylist',
    providers: [ ApiService ],
    styleUrls: ['app/components/technologylist.component.css'],
    templateUrl: 'app/components/technologylist.component.html',
    directives: [
        
    ]
})
export class TechnologyListComponent implements OnInit {
    private technologies: Context.GetTechnologies_Result;

    constructor(private _service: ApiService) { }

    private initialize()
    {
        this._service.getSessionState().subscribe(
            (value) => {
                this.technologies = value.json().technologies;
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.initialize();
    }
}
