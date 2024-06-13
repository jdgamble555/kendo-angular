import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LabelModule } from '@progress/kendo-angular-label';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';

@Component({
  selector: 'app-kendo-autocomplete',
  standalone: true,
  imports: [
    LabelModule,
    FormsModule,
    InputsModule,
    ReactiveFormsModule,
    DropDownsModule,
    ButtonsModule
  ],
  templateUrl: './kendo-autocomplete.component.html',
  styleUrl: './kendo-autocomplete.component.css'
})
export class KendoAutocompleteComponent {
  public areaList: Array<string> = [
    "Amsterdam",
    "Athens",
    "Barcelona",
    "Berlin",
    "Brussels",
    "Chicago",
    "Copenhagen",
    "Dublin",
    "Helsinki",
    "Houston",
    "Lisbon",
    "London",
    "Los Angeles",
    "Madrid",
    "Miami",
    "Montreal",
    "New York",
    "Paris",
    "Philadelphia",
    "Prague",
    "Rome",
    "Sao Paulo",
    "Seattle",
    "Stockholm",
    "Toronto",
    "Vancouver",
    "Vienna",
    "Vienna",
    "Warsaw",
  ];
}
