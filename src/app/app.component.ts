import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { KendoAutocompleteComponent } from './kendo-autocomplete/kendo-autocomplete.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AutocompleteComponent,
    KendoAutocompleteComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kendo-angular';
}
