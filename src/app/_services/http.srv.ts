import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
 
@Injectable()
export class HttpService {
    constructor(private http: Http) { }
 
    public get(endpoint: string, searchParams: object = {}): Observable<Response | any> {
        return this.http.get(endpoint, searchParams)
            .map(this.mapResponse);
    }

    private mapResponse(response: Response): Observable<Response> {
        return response.json() || {};
    }

    private catchError(response: Response): Observable<Response> {
        return Observable.throw({
            success: false,
            error: 'Algo ha salido mal...'
        });
    }

}