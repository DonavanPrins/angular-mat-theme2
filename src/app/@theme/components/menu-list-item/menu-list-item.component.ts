import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../../../@shared/constants/routes.constants';

import { showHideMenuText } from './menu-list.animations';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('500ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
    showHideMenuText,
  ],
})
export class MenuListItemComponent {
  @Input() public depth = 0;
  public expanded = false;
  @Input() public item: NavItem = <NavItem>{};
  @Input() public showNavItemTitle = true;

  constructor(public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  public onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    } else if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
}
