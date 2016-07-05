import { Injectable, EventEmitter}     from '@angular/core';
import { Http }             from '@angular/http';
import { Context  }         from '../dataflip.typings.ts'

@Injectable()
export class ApiService  {
    constructor(private _http: Http) {}

    getActitvities() {
        return this._http.get('/api/data/GetActivities');
    }

    createActivity(args: Context.CreateActivity_Parameters)
    {
        return this._http.post('/api/data/CreateActivity', args);
    }
}