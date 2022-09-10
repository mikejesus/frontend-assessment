import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
})
export class AccordionComponent implements OnInit {
  opened: boolean = false;
  @Input() title: string | undefined;
  @Input() content: string | undefined;
  constructor() {}

  ngOnInit(): void {}
}
