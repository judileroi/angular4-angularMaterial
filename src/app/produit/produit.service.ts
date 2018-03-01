import { Produit } from './../models/Produit';
import { Injectable } from '@angular/core';
import { Http , Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../environments/environment';

@Injectable()
export class ProduitService {

private url = environment.apiUrl+'/produits';
private headers;

  constructor(private http:Http) { 
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');

  }
     getProduits() : Observable<Produit[]> {

         return this.http.get(this.url, this.headers )
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     saveProduit(body:Object): Observable <Produit> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.url,body).map((res:Response)=>res.json)
                                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     updateProduit(body:Produit): Observable <Produit> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.put(this.url+'/'+body.id,body).map((res:Response)=>res.json)
                                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     deleteProduit(prod:Produit) : Observable <any>{

        return this.http.delete(this.url+'/'+prod.id);
     }

     getProduit(prod:Produit) : Observable<Produit> {

        return this.http.get(this.url+'/'+prod.id, this.headers )
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
