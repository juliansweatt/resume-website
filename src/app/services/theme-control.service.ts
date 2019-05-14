import { Injectable } from '@angular/core';
import { OverlayContainer} from '@angular/cdk/overlay';
import { BehaviorSubject } from 'rxjs';

interface Theme {
  name: string;
  primary: string;
}

@Injectable({
  providedIn: 'root'
})
export class ThemeControlService {
  private darkMode = new BehaviorSubject(true);
  private theme = new BehaviorSubject("dark-teal-theme");

  public isDark = this.darkMode.asObservable();
  public currentTheme = this.theme.asObservable();

  // Color Translations from https://material.io/design/color/#tools-for-picking-colors
  themes:Theme[]=[
    {
      name: "red-theme",
      primary: "#F44336"
    },
    {
      name: "teal-theme",
      primary: "#009688"
    },
    {
      name: "purple-theme",
      primary: "#9C27B0"
    },
    {
      name: "brown-theme",
      primary: "#795548"
    }
  ];

  changeTheme(replacement:string)
  {
    if(this.darkMode.value)
    {
      replacement = "dark-" + replacement;
    }

    this.theme.next(replacement);
  }

  toggleDark()
  {
    let previous = this.theme.value;
    if(this.darkMode.value)
    {
      this.darkMode.next(false);
      this.theme.next(this.theme.value.slice(5));
    }
    else{
      this.darkMode.next(true);
      this.theme.next("dark-" + this.theme.value);
    }
    
    // Replace theme for container elements (menus and pop-outs)
    this.overlayContainer.getContainerElement().classList.remove(previous);
    this.overlayContainer.getContainerElement().classList.add(this.theme.value);
  }

  isTheme(query:string):boolean
  {
    if(this.theme.value === query || this.theme.value.slice(5) === query)
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  constructor(public overlayContainer: OverlayContainer) {}
}
