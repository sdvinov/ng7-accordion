import { NgModule } from '@angular/core';
import { Ng7AccordionLibComponent } from './ng7-accordion-lib.component';
import { AccordionComponent } from './accordion/accordion.component';
import { AccordionPanelComponent } from './accordion-panel/accordion-panel.component';
import { AccordionHeaderComponent } from './accordion-header/accordion-header.component';
import { AccordionContentComponent } from './accordion-content/accordion-content.component';

@NgModule({
  declarations: [
    Ng7AccordionLibComponent,
    AccordionComponent,
    AccordionPanelComponent,
    AccordionHeaderComponent,
    AccordionContentComponent
  ],
  imports: [
  ],
  exports: [
    Ng7AccordionLibComponent,
    AccordionComponent,
    AccordionContentComponent,
    AccordionHeaderComponent,
    AccordionPanelComponent,
  ]
})
export class Ng7AccordionLibModule { }
