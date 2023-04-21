import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ErrorTailorModule } from '@ngneat/error-tailor';
import { SubscribeModule } from '@ngneat/subscribe';

import { errorTailerConfig } from './constants/form.validators.constants';

const ErrorTailor = ErrorTailorModule.forRoot(errorTailerConfig);

const ANGULAR_MODULES = [CommonModule, FormsModule];

const THIRD_PARTY_MODULES = [SubscribeModule];

@NgModule({
  imports: [...ANGULAR_MODULES, ...THIRD_PARTY_MODULES, ErrorTailor],
  declarations: [],
  exports: [...THIRD_PARTY_MODULES],
})
export class SharedModule {}
