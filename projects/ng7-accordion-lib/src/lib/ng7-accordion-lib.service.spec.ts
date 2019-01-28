import { TestBed } from '@angular/core/testing';

import { Ng7AccordionLibService } from './ng7-accordion-lib.service';

describe('Ng7AccordionLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Ng7AccordionLibService = TestBed.get(Ng7AccordionLibService);
    expect(service).toBeTruthy();
  });
});
