import {
  AfterContentChecked,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Input,
} from '@angular/core';
import {AccordionContentComponent} from '../accordion-content/accordion-content.component';

@Component({
  selector: 'acc-accordion-panel',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.css']
})
export class AccordionPanelComponent implements  AfterContentChecked {

  constructor(private ref: ChangeDetectorRef) { }

  @Input() public expanded;
  @ContentChild(AccordionContentComponent) public content: AccordionContentComponent;
  public id = 0;
  public collapsedAll;
  public hasExpandedInput;

  ngAfterContentChecked() {
    this.ref.detectChanges();
    if (this.collapsedAll) {
      this.content.isOpened = false;
    } else if (!this.hasExpandedInput && this.id === 0) {
      this.content.isOpened = true;
    } else {
      this.content.isOpened = this.expanded;
    }
  }
}
