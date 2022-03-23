import { ViewportRuler } from '@angular/cdk/scrolling';
import { Component, NgZone, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnDestroy {
  title = 'hououfes';
  height: number = 0;
  private readonly viewportChange = this.viewportRuler
    .change(10)
    .subscribe(() => this.ngZone.run(() => this.setSize()));
  constructor(
    private readonly viewportRuler: ViewportRuler,
    private readonly ngZone: NgZone
  ) {
    this.setSize();
  }
  ngOnDestroy() {
    this.viewportChange.unsubscribe();
  }
  private setSize() {
    const { height } = this.viewportRuler.getViewportSize();
    this.height = height;
    document.documentElement.style.setProperty(
      '--viewport-height',
      `${height}px`
    );
  }
}
