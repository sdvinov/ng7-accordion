import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'acc-accordion-content',
  templateUrl: './accordion-content.component.html',
  styleUrls: ['./accordion-content.component.css']
})
export class AccordionContentComponent implements OnInit {

  public expanded: boolean;
  constructor() { }

  ngOnInit() {
  }

}
