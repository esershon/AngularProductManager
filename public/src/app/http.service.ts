import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllProducts(){
    return this._http.get('/api/products')
  }

  getProduct(id){
    console.log("Going to the server to get a product", id)
    var thing= this._http.get('/api/products/'+id);
    console.log(thing);
    //spoiler-alert - it's an observable
    return thing;
  }

  postProduct(product){
    return this._http.post('/api/products', product)
}

  updateProduct(id, update){
    return this._http.put('/api/products/' + id, update)
  }

  deleteProduct(id){
    return this._http.delete('/api/products/'+id)
  }

}
