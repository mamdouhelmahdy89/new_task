import { Component } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartProduct:any[]=[];
  total:any = 0;
  success:boolean = false;

qun:any = this.cartProduct.find(item=>item.quantity);

constructor(private cart:CartService){}


ngOnInit(){

  this.getCartProduct();
}




getCartProduct(){

  if("cart" in localStorage){

    this.cartProduct = JSON.parse(localStorage.getItem("cart")!);

  }

  this.getCartTotal();
 
}








addAmount(index:number){

    this.cartProduct[index].quantity++;
    this.getCartTotal();
    localStorage.setItem("cart" , JSON.stringify(this.cartProduct));
   
}

changeDetect(){

  this.getCartTotal();
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct));
    
}

minsAmount(index:number){
  
  this.cartProduct[index].quantity--;
  this.getCartTotal();
  localStorage.setItem("cart" , JSON.stringify(this.cartProduct));
  
}

deleteProduct(index:number){

    this.cartProduct.splice(index,1);
    this.getCartTotal();

  localStorage.setItem("cart" , JSON.stringify(this.cartProduct));

}


clearCarts(){

  this.cartProduct = [];
  this.getCartTotal();


    
}


getCartTotal(){

  this.total = 0;
  for(let x in this.cartProduct){
     
     this.total += this.cartProduct[x].item.price * this.cartProduct[x].quantity;
    
  }


   
}


addcart(){

    let products = this.cartProduct.map(item=>{

       return {productId: item.item.id , quantity: item.quantity }
    })

    let model = {

       userId:2,
       date: new Date(),
       products:products
    }

     this.cart.createProdctCart(model).subscribe(
      (res)=>{

         this.success = true
      }
     )
    
}




}
