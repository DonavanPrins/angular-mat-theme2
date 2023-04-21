import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';

import { Observable } from 'rxjs';

import { appConstants } from '../../../@shared/constants/app.constant';

import { ThemeService } from '../../../@theme/theme.service';

import { SideNavService } from '../side-nav/side-nav.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  faHandHoldingUsd = faHandHoldingUsd;
  public collapse = true;
  isLightTheme$: Observable<boolean> = this._themeService.isLightTheme$;
  @Input() public shouldOpenSideNav =
    appConstants.sideNav.shouldOpenSideNavInitialState;
  @Input() public sidenav: MatSidenav | undefined;
  public notificationCount = 2;

  constructor(
    private _themeService: ThemeService,
    private _sideNavService: SideNavService
  ) {}

  public toggleDarkTheme(checked: boolean) {
    this._themeService.setLightTheme(checked);
  }

  public toggleSideNavVisibility() {
    this._sideNavService.toggleSideNavVisibility();
  }

  public logout() {}
}
