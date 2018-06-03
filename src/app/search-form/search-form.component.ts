import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as moment from 'moment';

import { DataService } from '../services/data.service';
import { HttpService } from '../services/http.service';
import { IDatePickerConfig } from 'ng2-date-picker';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchFinished: EventEmitter<boolean> = new EventEmitter<boolean>();


  private readonly datePickerConfig: IDatePickerConfig = {
    hideInputContainer: true,
    format: "YYYY-MM-DD HH:mm",
    locale: "ru",
    showTwentyFourHours: true,
    firstDayOfWeek: "mo",
    min: moment()
  }
  private readonly requiredFieldMessage = "Это поле обязательное";
  private searchForm: FormGroup;

  constructor(private dataService: DataService, private httpService: HttpService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      pickUpAddress: new FormControl(null, Validators.required),
      dropOffAddress: new FormControl(null, Validators.required),
      pickUpDate: new FormControl(null, Validators.required),
      dropOffDate: new FormControl(null, Validators.required)
    })
  }

  private get pickUpAddress(): FormControl {
    return this.searchForm.controls.pickUpAddress as FormControl;
  }
  private get dropOffAddress(): FormControl {
    return this.searchForm.controls.dropOffAddress as FormControl;
  }
  private get pickUpDate(): FormControl {
    return this.searchForm.controls.pickUpDate as FormControl;
  }
  private get dropOffDate(): FormControl {
    return this.searchForm.controls.dropOffDate as FormControl;
  }

  private onSubmit() {
    if (this.searchForm.invalid) {
      this.showErrors();
      return;
    }

    console.log(this.searchForm.value);

    this.httpService.searchCars(JSON.stringify(this.searchForm.value)).subscribe(
      data => {
        this.searchFinished.emit(true);
      },
      err => {
        this.searchFinished.emit(false);
      }
    );
  }

  private showErrors() {
    for (const control in this.searchForm.controls) {
      this.searchForm.controls[control].markAsDirty();
    }
  }
}
