import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MenTShirtsComponent } from './components/men-tshirts/men-tshirts.component';
import { MenPoloShirtsComponent } from './components/men-polo-shirts/men-polo-shirts.component';
import { MenShortsComponent } from './components/men-shorts/men-shorts.component';
import { KidsTshirtsComponent } from './components/kids-tshirts/kids-tshirts.component';
import { KidsPoloShirtsComponent } from './components/kids-polo-shirts/kids-polo-shirts.component';
import { KidsShortsComponent } from './components/kids-shorts/kids-shorts.component';
import { KapComponent } from './components/kap/kap.component';
import { StreetwaerComponent } from './components/streetwaer/streetwaer.component';
import { AtOfficeComponent } from './components/at-office/at-office.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BuyingComponent } from './components/details/buying.component'
import { HomeComponent } from './components/home/home.component';
import { ArrivalesComponent } from './components/arrivales/arrivales.component';
import { CaruseleComponent } from './components/carusele/carusele.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { ShortsComponent } from './components/shorts/shorts.component';
import { StylesFooterComponent } from './components/styles-footer/styles-footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { CartComponent } from './components/cart/cart.component';








@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArrivalesComponent,
    CaruseleComponent,
    FeaturedComponent,
    ShortsComponent,
    StylesFooterComponent,
    NavbarComponent,
    MenTShirtsComponent,
    MenPoloShirtsComponent,
    MenShortsComponent,
    KidsTshirtsComponent,
    KidsPoloShirtsComponent,
    KidsShortsComponent,
    KapComponent,
    StreetwaerComponent,
    AtOfficeComponent,
    AllProductsComponent,
    LoginComponent,
    SingleProductComponent,
    BuyingComponent,
    
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      defaultLanguage:"en",
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }),
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    
   

  ],
  providers: [],
  schemas:[(CUSTOM_ELEMENTS_SCHEMA)],
  bootstrap: [AppComponent]
})


export class AppModule { }
export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http);
}