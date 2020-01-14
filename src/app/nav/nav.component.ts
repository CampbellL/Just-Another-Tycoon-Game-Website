import {Component, OnInit} from '@angular/core';
import {fromEvent} from 'rxjs';
import {debounce, debounceTime, filter} from 'rxjs/operators';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.styl']
})
export class NavComponent implements OnInit {
  public navOpen: boolean;
  public translucent = true;

  constructor() {
  }

  public openNav() {
    this.navOpen = !this.navOpen;
  }

  ngOnInit() {
    fromEvent(window, 'scroll').pipe(
      debounceTime(10)
    ).subscribe(_ => {
      this.translucent = window.scrollY <= 10;
    });
  }

}
