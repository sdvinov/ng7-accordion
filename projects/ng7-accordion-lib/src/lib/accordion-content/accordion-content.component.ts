import {Component, AfterViewChecked, SimpleChanges} from '@angular/core';
import {AccordionPanelComponent} from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'acc-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent extends AccordionPanelComponent implements AfterViewChecked {

  constructor() {
    super();
  }

  ngAfterViewChecked() {
    console.log(this.expanded);
  }


}
