
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SingleProductService } from '../services/single-product.service';
import { ProductService } from '../services/product.service';



@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent {


 @Input() data:any = {}

 myData:any={};

 @Output() item = new EventEmitter()

addButton:boolean = false;
amount:number = 0;



  constructor(){
 
     
      
  }


  

  ngOnInit():void{


  }


  add(){

      this.item.emit( {item:this.data , quantity:this.amount});
     
       

  }


  
  
























}
