import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';

import { MenTShirtsComponent } from './components/men-tshirts/men-tshirts.component';
import { MenPoloShirtsComponent } from './components/men-polo-shirts/men-polo-shirts.component';
import { MenShortsComponent } from './components/men-shorts/men-shorts.component';
import { KidsTshirtsComponent } from './components/kids-tshirts/kids-tshirts.component';
import { KidsPoloShirtsComponent } from './components/kids-polo-shirts/kids-polo-shirts.component';
import { KidsShortsComponent } from './components/kids-shorts/kids-shorts.component';

import { AtOfficeComponent } from './components/at-office/at-office.component';
import { KapComponent } from './components/kap/kap.component';
import { StreetwaerComponent } from './components/streetwaer/streetwaer.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BuyingComponent } from './components/details/buying.component';
import { HomeComponent } from './components/home/home.component';
import { ArrivalesComponent } from './components/arrivales/arrivales.component';
import { CaruseleComponent } from './components/carusele/carusele.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { StylesFooterComponent } from './components/styles-footer/styles-footer.component';
import { CartComponent } from './components/cart/cart.component';


const routes: Routes = [

 
  {path:'arrivales' , component:ArrivalesComponent},
  {path:'carusele' , component:CaruseleComponent},
  {path:'featured' , component:FeaturedComponent},
  {path:'navbar' , component:NavbarComponent},
  {path:'shorts' , component:ShortsComponent},
  {path:'stylefooter' ,component:StylesFooterComponent },
  {path:'mTshirts' , component:MenTShirtsComponent},
  {path:'menpoloshirts' , component:MenPoloShirtsComponent},
  {path:'menshorts' , component:MenShortsComponent},
  {path:'kidstshirts' , component:KidsTshirtsComponent},
  {path:'kidspoloshirts' , component:KidsPoloShirtsComponent},
  {path:'kidsshorts' , component:KidsShortsComponent},
  {path:'atoffice' , component:AtOfficeComponent},
  {path:'kap' , component:KapComponent},
  {path:'streetwaer' , component:StreetwaerComponent},
  {path:'allproducts' , component:AllProductsComponent},
  {path:'buy' , component:SingleProductComponent},
  {path:'buying/:id' , component:BuyingComponent},
  {path:'login' , component:LoginComponent},
  {path:'home' , component:HomeComponent},

  {path:'cart' , component:CartComponent},
  {path:'**', component:HomeComponent},
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
