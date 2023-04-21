import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { IMainForm } from './main-form.interface';

export interface dataObj {
  col1: string;
  col2: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AdminComponent {
  form = new FormGroup<IMainForm>({
    matTextBox: new FormControl<number>(10000, {
      validators: [Validators.minLength(4), Validators.maxLength(8)],
      nonNullable: true,
    }),
    matSelect: new FormControl<string>('1', {
      validators: [Validators.minLength(4), Validators.maxLength(8)],
      nonNullable: true,
    }),
  });

  columns = ['col1', 'col2'];
  tableData = new MatTableDataSource<dataObj>();

  constructor() {
    this.tableData.data = [
      {
        col1: 'row 1 column 1 data',
        col2: 'row 1 column 2 data',
      },
      {
        col1: 'row 2 column 1 data',
        col2: 'row 2 column 2 data',
      },
    ];
  }
}
