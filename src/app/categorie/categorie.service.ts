import { Categorie } from './../models/Categorie';
import { environment } from './../../environments/environment';
import { Injectable }  from '@angular/core';
import { Observable }  from 'rxjs/Rx';
import { Http , Response, Headers, RequestOptions } from '@angular/http';



@Injectable()

export class CategorieService  {

private url = environment.apiUrl+'/categories';
private headers;

  constructor(private http:Http) { 
      this.headers = new Headers();
      this.headers.append('Content-Type', 'application/json');
      this.headers.append('Access-Control-Allow-Origin', '*');

  }
     getCategories() : Observable<Categorie[]> {

         return this.http.get(this.url, this.headers )
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     saveCategorie(body:Object): Observable <Categorie> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.url,body).map((res:Response)=>res.json)
                                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     updateCategorie(body:Categorie): Observable <Categorie> {
        let bodyString = JSON.stringify(body); // Stringify payload
        let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.put(this.url+'/'+body.id,body).map((res:Response)=>res.json)
                                  .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

     deleteCategorie(prod:Categorie) : Observable <any>{

        return this.http.delete(this.url+'/'+prod.id);
     }

     getCategorie(prod:Categorie) : Observable<Categorie> {

        return this.http.get(this.url+'/'+prod.id, this.headers )
                         .map((res:Response) => res.json())
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }
}
