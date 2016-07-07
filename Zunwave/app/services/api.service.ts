import { Injectable, EventEmitter }     from '@angular/core';
import { Http, Response }   from '@angular/http';
import { Context  }         from '../dataflip.typings.ts'
import { Observable }       from 'rxjs/Observable';

@Injectable()
export class ApiService  {
    constructor(private _http: Http) { }

    private getSessionStateResult: Observable<Response>;

    getActitvities() {
        return this._http.get('/api/data/GetActivities');
    }

    getSessionState() {
        this.getSessionStateResult =
            this._http.get('/api/data/getsessionstate?userId=1');

        return this.getSessionStateResult;
    }

    createArticle(args: Context.CreateArticle_Parameters) {
        return this._http.post('/api/data/CreateArticle', args);
    }

    createBook(args: Context.CreateBook_Parameters) {
        return this._http.post('/api/data/CreateBook', args);
    }

    createCodeProject(args: Context.CreateCodeProject_Parameters) {
        return this._http.post('/api/data/CreateCodeProject', args);
    }

    /*
    createActivity(args: Context.CreateActivity_Parameters)
    {
        return this._http.post('/api/data/CreateActivity', args);
    }*/
}