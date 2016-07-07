import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';
import { Router }       from '@angular/router';
import { ApiService }   from '../services/api.service'
import { Http }         from '@angular/http';
import { Context  }     from '../dataflip.typings'
import { CodeProjectEntryComponent  }     from './codeprojectentry.component'

@Component({
    selector: 'codeprojectlist',
    providers: [ ApiService ],
    styleUrls: ['app/components/codeprojectlist.component.css'],
    templateUrl: 'app/components/codeprojectlist.component.html',
    directives: [
        CodeProjectEntryComponent
    ]
})
export class CodeProjectListComponent implements OnInit {
    private codeProjects: Context.GetCodeProjects_Result;

    constructor(private _service: ApiService) { }

    private render()
    {
        this._service.getSessionState().subscribe(
            (value) => {
                this.codeProjects = value.json().codeProjects;
            },
            (error) => { },
            () => { }
        );
    }

    ngOnInit() {
        this.render();
    }
}
