import { Injectable } from "../../node_modules/@angular/core";
import { IProduct } from "./product";
import { Observable } from "../../node_modules/rxjs/Observable";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";

import '../../node_modules/rxjs/add/observable/throw'
import '../../node_modules/rxjs/add/operator/catch'
import '../../node_modules/rxjs/add/operator/do'

@Injectable()
export class ProductService 
{
    private _productUrl = './api/products/products.json';
    constructor(private _http: HttpClient) 
    {
    }

    getProducts(): Observable<IProduct[]>
    {
        return this._http.get<IProduct[]>(this._productUrl)
                .do(data => console.log('All: ', JSON.stringify(data)))
                .catch(this.handleError);
    }

    private handleError(err: HttpErrorResponse)
    {
        console.log(err.message);
        return Observable.throw(err.message);
    }
}