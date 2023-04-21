/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';

import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  NavItem,
  sideNavMenus,
} from '../../../@shared/constants/routes.constants';

import {
  animateText,
  onSideNavChange,
  resizeAvatarOnSideNavCollapseExpand,
} from '../../../@theme/animations/animations';

import { SideNavService } from './side-nav.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    onSideNavChange,
    animateText,
    resizeAvatarOnSideNavCollapseExpand,
  ],
})
export class SideNavComponent {
  private _sideNavMenusSubject = new BehaviorSubject<NavItem[]>(sideNavMenus);
  public collapse = true;
  public sideNavMenusAction$ = this._sideNavMenusSubject.asObservable();
  public isSideNavExpanded$ = this._sidebarService.isSideNavExpanded$;
  public linkText = false;
  public showNavItemTitle$ = this._sidebarService.showNavItemTitle$;
  public sideNavMenus = sideNavMenus;
  public sideNavState = false;

  // Combine the streams for the view
  public vm$ = combineLatest([
    this.isSideNavExpanded$,
    this.showNavItemTitle$,
    this.sideNavMenusAction$,
  ]).pipe(
    map(([isSideNavExpanded, showNavItemTitle, sideNavMenus]) => ({
      isSideNavExpanded,
      showNavItemTitle,
      sideNavMenus,
    }))
  );

  constructor(private _sidebarService: SideNavService) {}

  public onSideNavSizeToggle() {
    this._sidebarService.toggleSideNavSize();
  }

  public onRoleChanged($event: MatSelectChange) {}

  public selectedItem(event: unknown) {
    // console.log(event);
  }
}
