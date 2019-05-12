import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeControlService {
  private darkMode = new BehaviorSubject(true);
  private theme = new BehaviorSubject("dark-default-theme");

  public isDark = this.darkMode.asObservable();
  public currentTheme = this.theme.asObservable();

  toggleDark()
  {
    if(this.darkMode.value)
    {
      this.darkMode.next(false);
      this.theme.next(this.theme.value.slice(5));
    }
    else{
      this.darkMode.next(true);
      this.theme.next("dark-" + this.theme.value);
    }
    //console.log("theme is now" + this.theme.value);
  }
}
