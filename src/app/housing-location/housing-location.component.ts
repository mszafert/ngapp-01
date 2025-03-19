import { RouterModule } from '@angular/router';
import { HousingLocation } from './../housing-location';
import { Component, inject, Input } from '@angular/core';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  templateUrl: './housing-location.component.html',
  styleUrl: './housing-location.component.css'
})
export class HousingLocationComponent {
  @Input() housingLocation!: HousingLocation;
}
