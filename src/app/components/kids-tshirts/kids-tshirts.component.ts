import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-kids-tshirts',
  templateUrl: './kids-tshirts.component.html',
  styleUrls: ['./kids-tshirts.component.css']
})
export class KidsTshirtsComponent {





  constructor(private router:Router){}



  msg1 = false;
  msg2 = false;
  msg3 = false;
  msg4 = false;
  msg5 = false;
  msg6 = false;
  msg7 = false;
  msg8 = false;
  msg9 = false;
  
  
    showMsg1(){
  
      this.msg1 = true;
      
  
   }
  
   showMsg2(){
  
    this.msg2 = true;
    
  
  }
  
  
  showMsg3(){
  
  this.msg3 = true;
  
  
  }
  
  showMsg4(){
  
  this.msg4 = true;
  
  
  }
  
  
  showMsg5(){
  
  this.msg5 = true;
  
  
  }
  
  showMsg6(){
  
  this.msg6 = true;
  
  
  }
  
  showMsg7(){
  
  this.msg7 = true;
  
  
  }
  
  showMsg8(){
  
  this.msg8 = true;
  
  
  }
  
  showMsg9(){
  
  this.msg9 = true;
  
  
  }


 gotohome(){

  this.router.navigate(['/home']);
 }


}
