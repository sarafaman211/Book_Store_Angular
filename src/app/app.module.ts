import { NgModule, ChangeDetectionStrategy } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from "@angular/material/dialog"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CollectionComponent } from './myComponents/collection/collection.component';
import { AboutComponent } from './myComponents/about/about.component';
import { ContactComponent } from './myComponents/contact/contact.component';
import { HomeComponent } from './myComponents/home/home.component';
import { LoginComponent } from './myComponents/auth/login/login.component';
import { SignUpComponent } from './myComponents/auth/sign-up/sign-up.component';
import { FooterComponent } from './myComponents/footer/footer.component';
import { CarouselComponent } from './myComponents/carousel/carousel.component';
import { ProfileComponent } from './myComponents/auth/profile/profile.component';
import { CartComponent } from './myComponents/cart/cart.component';
import { ProductDetailsComponent } from './myComponents/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CollectionComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent,
    CarouselComponent,
    ProfileComponent,
    CartComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CarouselModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule
    ],
  providers: [{ provide: ChangeDetectionStrategy,useValue: ChangeDetectionStrategy.OnPush  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
