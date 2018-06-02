import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpService } from './services/http.service';
import { RentalPageComponent } from './rental-page/rental-page.component';
import { SearchFormComponent } from './search-form/search-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RentalPageComponent,
    SearchFormComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
