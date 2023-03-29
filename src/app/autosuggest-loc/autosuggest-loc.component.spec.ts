import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutosuggestLocComponent } from './autosuggest-loc.component';

describe('AutosuggestLocComponent', () => {
  let component: AutosuggestLocComponent;
  let fixture: ComponentFixture<AutosuggestLocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutosuggestLocComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutosuggestLocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
