import { Component, Output, EventEmitter } from '@angular/core';

import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private httpService: HttpService) {}

  onSubmit(event: Event) {
    event.preventDefault();
    this.httpService.searchCars({}).subscribe(
      data => {
        this.result.emit(true);
      },
      err => {
        this.result.emit(false);
      });
  }
}
