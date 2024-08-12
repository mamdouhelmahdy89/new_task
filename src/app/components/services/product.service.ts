import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyInterFace } from '../models/my-inter-face';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  id:any;

  constructor(private http:HttpClient) {

   

   
   }


  productURl = 'https://fakestoreapi.com/products';

 
  


 ngOnInit():void{


 }



 getAllProducts():Observable<any>{

   return this.http.get<MyInterFace>(this.productURl);
 }





delete(id:any):Observable<any>{

    return this.http.delete(`${this.productURl}/${id}`);
}


create(body:any):Observable<any>{
       
     return this.http.post<MyInterFace>(this.productURl ,body);

}



update(body:any):Observable<any>{

  return this.http.put(`${this.productURl}/${body.id}` , body);
}





getProductByID(id:any):Observable<any>{

  return this.http.get(`${this.productURl}/`+ id);
}


getAllBuying(name:any):Observable<any>{

  return this.http.get(`${this.productURl}/`+ name);
}










}
