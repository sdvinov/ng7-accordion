import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng7AccordionLibComponent } from './ng7-accordion-lib.component';

describe('Ng7AccordionLibComponent', () => {
  let component: Ng7AccordionLibComponent;
  let fixture: ComponentFixture<Ng7AccordionLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Ng7AccordionLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng7AccordionLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
