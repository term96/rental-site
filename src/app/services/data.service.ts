import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly carTypes = ["Легковой", "Грузовой", "Спортивный", "Вездеход"];
  private readonly carRentalCompanies = ["Alamo", "Hertz", "Avis", "Budget"];

  getCarTypes(): string[] {
    return this.carTypes;
  }

  getCarRentalCompanies(): string[] {
    return this.carRentalCompanies;
  }
}
