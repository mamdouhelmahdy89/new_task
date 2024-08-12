import { Component } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  language:any = "en";

constructor(private translate:TranslateService){

     this.language = this.translate.currentLang
}










  changLanguage(){
      
      if(this.language == 'en'){

        localStorage.setItem('language','ar');
        

      }else{

        localStorage.setItem('language','en');
      }

      window.location.reload();
  }







}
