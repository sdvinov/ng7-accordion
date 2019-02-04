import {Component} from '@angular/core';

@Component({
  selector: 'acc-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent {

  constructor() { }

  public isOpened = false;
}
