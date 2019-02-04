import {AfterViewInit, Component, ContentChildren, Input, QueryList} from '@angular/core';
import {AccordionPanelComponent} from '../accordion-panel/accordion-panel.component';

@Component({
  selector: 'acc-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements AfterViewInit {

  constructor() { }

  @Input() public collapsedAll = false;
  @ContentChildren(AccordionPanelComponent) public panels: QueryList<AccordionPanelComponent>;

  public hasExpandedInput = false;
  public counter = 0;

  ngAfterViewInit() {
    console.log(this.panels);
    this.panels.forEach(panel => {
      panel.collapsedAll = this.collapsedAll;
      panel.id += this.counter;
      this.counter++;
    });
    if (this.panels.filter(panel => panel.expanded === true).length) {
      this.panels.forEach(panel => panel.hasExpandedInput = true);
    }
  }
}
