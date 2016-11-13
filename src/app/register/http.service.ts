import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class HttpService {

    constructor(private http: Http) {

    }

    sendData(user: any) {
        const body = JSON.stringify(user);
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://gold4u-53090.firebaseio.com/customer.json', body, {
            headers: headers
        })
        .map((data: Response) => data.json());
    }


}