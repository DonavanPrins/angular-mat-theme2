import { CommonModule } from '@angular/common';
import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeModule } from '../@theme/theme.module';

import { CoreService } from './core.service';
import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

const ANGULAR_MODULES = [CommonModule, RouterModule];

@NgModule({
  imports: [...ANGULAR_MODULES, ThemeModule],
  exports: [],
  declarations: [],
  providers: [CoreService],
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {
  public static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [],
    };
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }
}
