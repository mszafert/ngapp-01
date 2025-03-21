import { HousingService } from './../housing.service';
import { HousingLocation } from './../housing-location';
import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  housingLocationList: HousingLocation[] = [];
  filteredLocationList: HousingLocation[] = [];
  housingService = inject(HousingService);

  constructor() {
    this.housingService.getAllHousinglocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) this.filteredLocationList = this.housingLocationList

    this.filteredLocationList = this.housingLocationList.filter(
      housingLocation => housingLocation.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}
