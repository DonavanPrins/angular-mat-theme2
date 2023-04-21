import { Injectable } from '@angular/core';

import { BehaviorSubject, map, Observable } from 'rxjs';

import { Theme } from './theme.constants';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  isLightTheme$ = new BehaviorSubject<boolean>(false);

  setLightTheme(isLightTheme: boolean): void {
    this.isLightTheme$.next(isLightTheme);
  }

  get activeTheme$(): Observable<Theme> {
    return this.isLightTheme$.pipe(
      map((isLightTheme) => (isLightTheme) ? Theme.Light : Theme.Dark)
    );
  }
}
