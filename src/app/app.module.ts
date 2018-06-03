import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { DpDatePickerModule } from 'ng2-date-picker';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
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
    DpDatePickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [DataService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
