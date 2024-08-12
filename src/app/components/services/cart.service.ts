import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private serve:HttpClient) { }



createProdctCart(model:any):Observable<any>{

return  this.serve.post('https://fakestoreapi.com/carts' , model);

}






}
