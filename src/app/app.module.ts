import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//to contact with api 
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// toaster 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ViewCustomerComponent } from './components/view-customer/view-customer.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewCustomerComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    HttpClientModule ,
    ReactiveFormsModule ,
    FormsModule ,
  
    BrowserAnimationsModule,
 
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
    
  ],
  providers: [
   
],
  bootstrap: [AppComponent]
})
export class AppModule { }
