import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent {

  id:any;
  data:any ={}

  constructor(private route:ActivatedRoute , private productBuy:ProductService,private routes:Router){

    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id)
  }



ngOnInit():void{

   this.getproduct()
}

getproduct(){

    this.productBuy.getProductByID(this.id).subscribe(

       (res)=>{
          this.data = res
       }
    )
}







 






}















