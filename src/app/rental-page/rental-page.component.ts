import { Component } from '@angular/core';

@Component({
  selector: 'app-rental-page',
  templateUrl: './rental-page.component.html',
  styleUrls: ['./rental-page.component.css']
})
export class RentalPageComponent {
  searchSucceed?: boolean;

  onSearchResult(searchSucceed: boolean): void {
    this.searchSucceed = searchSucceed;
  }
}
