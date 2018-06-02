import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  @Output() result: EventEmitter<boolean> = new EventEmitter<boolean>();

  onSubmit(event: Event) {
    event.preventDefault();
    this.result.emit( Date.now() % 2 == 1 );
  }
}
