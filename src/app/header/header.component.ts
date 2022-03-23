import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent implements OnInit {
  public isHome: boolean | undefined;
  public isMaps: boolean | undefined;
  public isTimetable: boolean | undefined;
  public isContents: boolean | undefined;
  public isMuseum: boolean | undefined;

  @Output() public sidenavToggle = new EventEmitter();

  constructor(private router: Router) {
    router.events.subscribe(
      (event) => event instanceof NavigationEnd && this.handleRouteChange()
    );
  }

  ngOnInit(): void {}

  handleRouteChange = () => {
    this.router.url === '/' ? (this.isHome = true) : (this.isHome = false);
    this.router.url === '/maps' ? (this.isMaps = true) : (this.isMaps = false);
    this.router.url === '/timetable'
      ? (this.isTimetable = true)
      : (this.isTimetable = false);
    this.router.url === '/contents'
      ? (this.isContents = true)
      : (this.isContents = false);
    this.router.url === '/museum'
      ? (this.isMuseum = true)
      : (this.isMuseum = false);
  };
  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  };
}
