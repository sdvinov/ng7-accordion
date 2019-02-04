import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionComponent } from './accordion.component';

describe('AccordionComponent', () => {
  let component: AccordionComponent;
  let fixture: ComponentFixture<AccordionComponent>;
  const mockPanelComponent = [
    {
      id: 0,
      collapsedAll: false,
      content: {
        isOpened: undefined,
      },
      hasExpandedPanel: false,
    },
    {
      id: 1,
      collapsedAll: false,
      content: {
        isOpened: undefined,
      },
      hasExpandedPanel: false,
    },
    {
      id: 2,
      collapsedAll: false,
      content: {
        isOpened: undefined,
      },
      hasExpandedPanel: false,
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // i'll figure it out
  // it('should set', () => {
  //   component.collapsedAll = false;
  //   component.hasExpandedInput = false;
  //   component.counter = 0;
  //   component.panels = [
  //     {
  //       id: 0,
  //       collapsedAll: false,
  //       content: {
  //         isOpened: undefined,
  //       },
  //       hasExpandedPanel: false,
  //     },
  //     {
  //       id: 1,
  //       collapsedAll: false,
  //       content: {
  //         isOpened: undefined,
  //       },
  //       hasExpandedPanel: false,
  //     },
  //     {
  //       id: 2,
  //       collapsedAll: false,
  //       content: {
  //         isOpened: undefined,
  //       },
  //       hasExpandedPanel: false,
  //     }
  //   ];
  //   spyOn(component, 'ngAfterViewInit');
  //   component.ngAfterViewInit();
  //   expect(component.ngAfterViewInit).toHaveBeenCalled();
  //   expect(component.panels[1]).toBe(mockPanelComponent[1]);
  // });
});
