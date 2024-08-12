import { Component, EventEmitter, Output } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';
import { SingleProductService } from '../services/single-product.service';

@Component({
  selector: 'app-arrivales',
  templateUrl: './arrivales.component.html',
  styleUrls: ['./arrivales.component.css']
})
export class ArrivalesComponent {


  arrivesData:any [] = [];
  cartProduct:any[] = [];



  

  constructor(private arrv:ProductService,private router:Router){}




 

  ngOnInit():void{


    this.getProducts();
    
}



  getProducts(){

    this.arrv.getAllProducts().subscribe(
 
     (res) =>{
 
         this.arrivesData = res
     }
   )
 }




 addToCart(event:any){

   if("cart" in localStorage){

       this.cartProduct = JSON.parse(localStorage.getItem("cart")!);
       let exist = this.cartProduct.find(item=>item.item.id == event.item.id);
       if(exist){
         alert('this product already existes in cart');
       }else{
        this.cartProduct.push(event);
        localStorage.setItem("cart" , JSON.stringify(this.cartProduct));
        
       }
       
   }else{
     
    this.cartProduct.push(event);
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct));

    console.log(event)
   }
   

   
 }


     
 }

















