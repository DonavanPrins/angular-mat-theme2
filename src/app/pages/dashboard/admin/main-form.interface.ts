import { FormControl, FormGroup } from '@angular/forms';

export interface IMainForm {
  matTextBox: FormControl<number>;
  matSelect: FormControl<string>;
}
