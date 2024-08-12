import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userForm!:FormGroup;
  users:any[]=[];

 constructor(private router:Router,private fb:FormBuilder,private us:AuthService,private toastr:ToastrService){}


 ngOnInit():void{

  this.createForm();
  this.getUsers();

 }



goToAdmin(f:any){

    if(f.name.value=== "Admin" && f.password.value==="123456" && f.confirmpassword.value==="123456"){


      this.router.navigate(['/allproducts'])
     

    }else{
       
      this.router.navigate(['/home']);
    }
   

  


    

    this.submit()
}





createForm(){

    this.userForm = this.fb.group({

        name:['' , [Validators.required]],
        password:['' , [Validators.required]],
        confirmPassword:['' , [Validators.required]],
    })
}


getUsers(){

    this.us.getUser().subscribe(

       (res:any)=>{
         this.users = res
       }
    )
}

submit(){

   const model = {
      name:this.userForm.value.name,
      password:this.userForm.value.password
   }

   let index = this.users.findIndex(item=>item.name==this.userForm.value.name)
   if(index!== -1){
      
       this.toastr.error('this name alredy ixestes !!');
   }else{
        
        
   this.us.createUser(model).subscribe(

    (res)=>{

      this.toastr.success('login is success');
    }
  )

   }

}

}
