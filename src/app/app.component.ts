import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as AOS from 'aos';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  title = 'glow_products';
  showSplash: boolean = true;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  pageLoad: boolean = true;
  ngOnInit(): void {
    AOS.init();
    setTimeout(() => {
      this.showSplash = !this.showSplash;
    }, 2400);
  }

  changeLoadingState(state: boolean): boolean {
    return !state;
  }
}
