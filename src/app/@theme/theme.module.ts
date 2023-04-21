import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SharedModule } from '../@shared/shared.module';

import { DefaultLayoutComponent } from './components/default-layout/default-layout.component';
import { MenuListItemComponent } from './components/menu-list-item';
import { SideNavService } from './components/side-nav/side-nav.service';
import {
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  SpinnerComponent,
} from './components';
import { ThemeService } from './theme.service';
import { SubscribeModule } from '@ngneat/subscribe';
import { ANGULAR_MATERIAL_MODULES } from '../@shared/angular-material-modules.const';

const ANGULAR_MODULES = [CommonModule, RouterModule];

const THIRD_PARTY_MODULES = [FontAwesomeModule, SubscribeModule];

const COMPONENTS = [
  DefaultLayoutComponent,
  FooterComponent,
  HeaderComponent,
  SideNavComponent,
  SpinnerComponent,
  MenuListItemComponent,
];

@NgModule({
  imports: [
    ...ANGULAR_MODULES,
    ...THIRD_PARTY_MODULES,
    SharedModule,
    ...ANGULAR_MATERIAL_MODULES,
  ],
  exports: [...COMPONENTS, ...THIRD_PARTY_MODULES],
  declarations: [...COMPONENTS],
  providers: [ThemeService, SideNavService],
})
export class ThemeModule {
  public static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [],
    };
  }
}
