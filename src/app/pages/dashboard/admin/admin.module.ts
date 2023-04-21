import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SubscribeModule } from '@ngneat/subscribe';

import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { ANGULAR_MATERIAL_MODULES } from '../../../@shared/angular-material-modules.const';

const ANGULAR_MODULES = [FormsModule, ReactiveFormsModule];

@NgModule({
  declarations: [AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ...ANGULAR_MATERIAL_MODULES,
    ...ANGULAR_MODULES,
    SubscribeModule,
  ],
  providers: [],
})
export class AdminModule {}
