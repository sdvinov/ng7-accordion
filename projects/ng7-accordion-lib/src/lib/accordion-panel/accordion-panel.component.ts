import {OnChanges, Component, Input, AfterViewInit, ViewChildren, QueryList, ViewChild} from '@angular/core';
import {AccordionContentComponent} from '../accordion-content/accordion-content.component';

@Component({
  selector: 'acc-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements AfterViewInit {

  // @ViewChildren(AccordionContentComponent) public accordionContentComponent: QueryList<any>;
  @Input() expanded1: boolean;
  public expanded;

  constructor() { }

  ngAfterViewInit() {
    console.log(this.expanded1);
    this.expanded = this.expanded1;
    // console.log(this.expanded);
    // console.log(this.accordionContentComponent);
  }

}
