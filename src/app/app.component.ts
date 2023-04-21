import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';
import {DOCUMENT} from '@angular/common';

import { ThemeService } from './@theme/theme.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(
    overlayContainer: OverlayContainer,
    private _themeService: ThemeService,
    @Inject(DOCUMENT) private document: Document
  ) {
    this._themeService.isLightTheme$.subscribe((isLightTheme) => {
      if (isLightTheme) {
        this.document.documentElement.classList.add("light-theme");
      } else {
        this.document.documentElement.classList.remove("light-theme");
      }
    });
  }

}
