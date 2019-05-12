import { Component } from '@angular/core';
import { JsonImportService } from 'src/app/services/json-import.service';
import { ThemeControlService } from './services/theme-control.service';

export class date
{
  month: number;
  day: number;
  year: number;

  monthKey: Array<string> = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  constructor(month: number, day: number, year:number)
  {
    this.month = month;
    this.day = day;
    this.year = year;
  }

  toString(): string
  {
    if(this.day > 0)
    {
      return this.monthKey[this.month-1] + " " + this.day + ", " + this.year;
    }
    else
    {
      return this.monthKey[this.month-1] + " " + this.year;
    }
  }
}

export class location
{
  city?: string;
  zipCode?: number;
  state?: string;
  country?: string;

  constructor(city?: string, zipCode?: number, state?:string, country?:string)
  {
    this.city = city;
    this.zipCode = zipCode;
    this.state = state;
    this.country = country;
  }

  toString(): string
  {
    let returnString: string = "";
    if(this.city)
    {
      returnString += this.city;
    }
    if(this.state)
    {
      if(returnString.length > 0)
      {
        returnString += ", " + this.state;
      }
      else
      {
        returnString += this.state;
      }
    }
    if(this.zipCode)
    {
      if(returnString.length > 0)
      {
        returnString += " " + this.zipCode;
      }
      else
      {
        returnString += "" + this.zipCode;
      }
    }
    if(this.country)
    {
      if(returnString.length > 0 )
      {
        returnString += ", " + this.country;
      }
      else
      {
        returnString += this.country;
      }
    }

    return returnString;
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ JsonImportService, ThemeControlService ] // Provide global service (singleton)
})
export class AppComponent {
  title:string = 'Resumé';
  ready:boolean = false;
  currentTheme:string = null;
  isDark:boolean = null;

  constructor(public json: JsonImportService, public themeService: ThemeControlService){
    json.jsonReady.subscribe(ready=>{
      this.ready = ready.valueOf();
    })

    this.themeService.isDark.subscribe(isDark =>{
      this.isDark = isDark.valueOf();
    });

    this.themeService.currentTheme.subscribe(currentTheme =>{
      this.currentTheme = currentTheme.valueOf();
    });
  }
}