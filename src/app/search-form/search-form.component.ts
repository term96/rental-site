import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  @Output() searchFinished: EventEmitter<boolean> = new EventEmitter<boolean>();

  private searchForm: FormGroup;
  private readonly minAddressLength: number = 10;

  constructor(private httpService: HttpService) {}

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      pickUpAddress: new FormControl(null, [Validators.required, Validators.minLength(this.minAddressLength)]),
      dropOffAddress: new FormControl(null, Validators.minLength(this.minAddressLength))
    })
  }

  private get pickUpAddress(): FormControl {
    return this.searchForm.controls.pickUpAddress as FormControl;
  }
  private get dropOffAddress(): FormControl {
    return this.searchForm.controls.dropOffAddress as FormControl;
  }

  private onSubmit() {
    if (this.searchForm.invalid) {
      this.showErrors();
      return;
    }

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
