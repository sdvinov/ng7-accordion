import {AfterViewChecked, Component, Input, ViewChildren} from '@angular/core';
import {AccordionContentComponent} from '../accordion-content/accordion-content.component';

@Component({
  selector: 'acc-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements AfterViewChecked {

  @ViewChildren(AccordionContentComponent) public content: AccordionContentComponent;
  @Input() public expanded = false;

  constructor() { }

  ngAfterViewChecked() {
    this.content.expanded = this.expanded;
    console.log(this.content);
  }

}
