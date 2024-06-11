import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KendoAutocompleteComponent } from './kendo-autocomplete.component';

describe('KendoAutocompleteComponent', () => {
  let component: KendoAutocompleteComponent;
  let fixture: ComponentFixture<KendoAutocompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KendoAutocompleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KendoAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
