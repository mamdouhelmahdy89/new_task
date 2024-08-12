import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent {


  constructor(private products:ProductService){}


  productData:any []=[]; 

  myconvert = false;

  photoFileName:any;

  myBody = {

     
    id:'',
    title:'',
    price:'',
    category:'',
    description:'',
    image:''

  }

  ngOnInit():void{


      this.getProducts();
  }






getProducts(){

   this.products.getAllProducts().subscribe(

    (res) =>{

        this.productData = res
    }
  )
}




deleteProduct(id:any){

    this.products.delete(id).subscribe(

      ()=>{

        this.productData = this.productData.filter(item=> item.id != id)
      }
    )
}


createProduct(){

      this.products.create(this.myBody).subscribe(


         (item)=>{

             this.productData = [item , ...this.productData]
         }
      )
}


editProduct(item:any){

     this.myBody = item;
     this.myconvert = true;
}




updateProduct(){

     this.products.update(this.myBody).subscribe(

       (body)=>{

           this.myconvert = false;
       }
     )
}










}
