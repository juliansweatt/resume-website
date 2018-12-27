import { Component, OnInit, HostListener } from '@angular/core';
import { JsonImportService } from '../../services/json-import.service';

export class skill{
  name: string;
  skillLevel: number;
  category: string;

  constructor(name:string, skillLevel:number, category:string)
  {
    this.name = name;
    this.skillLevel = skillLevel;
    this.category = category;
  }

  getFontSize():string{
    let splitString:Array<string> = this.name.split(' ');
    let longestStringLength: number = 0;
    let size: number = (innerWidth/(100)) * this.skillLevel;

    if(splitString.length > 1 )
    {
      for( let substring of splitString )
      {
        if( substring.length > longestStringLength)
        {
          longestStringLength = substring.length;
        }
      }
    }

    if(longestStringLength > 6)
    {
      size = size * .75
    }

    
    let sizeString: string = "" + size + "pt";
    return sizeString;
  }
}

export class skillCategory
{
  active: boolean;
  style: string;

  constructor(active: boolean, style: string)
  {
    this.active = active;
    this.style = style;
  }

  public toggle():void
  {
    if(this.active)
    {
      this.active = false;
      this.style = this.style + "Inactive";
      console.log(this.style)
    }
    else
    {
      this.active = true;
      this.style = this.style.replace('Inactive','')
    }
  }
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsHistory: Array<skill> = new Array();
  categories: Map<string, skillCategory> = new Map<string, skillCategory>();
  categoryArray: Array<any> = null;
  colors:Array<string>=["red","orange","yellow","green","blue","purple"];

  public innerWidth: number;

  @HostListener('window:resize', ['$event'])
    onResize(event) {
    this.innerWidth = window.innerWidth;
  } 

  constructor( private json: JsonImportService ) {
    json.jsonReady.subscribe(ready=>{
      if(ready.valueOf()){
        let exampleSkills = new Array<any>();

        for( let skillInstance of json.getSkills() )
        {
          exampleSkills.push(new skill(skillInstance.name, skillInstance.skillLevel, skillInstance.category))
        }
    
        let currentColorIndex: number = -1;
        
        if( json.shouldShuffleSkills() )
        {
          exampleSkills.sort(function(a, b){return 0.5 - Math.random()})
        }
    
        for(let skill of exampleSkills)
        {
          this.skillsHistory.push(skill);
          
          if(!this.categories.has(skill.category))
          {
            currentColorIndex++;
            this.categories.set(skill.category, new skillCategory( true, this.colors[currentColorIndex]));
          }
        }
    
        this.categoryArray = Array.from(this.categories.entries());
      }
    })
  }

  ngOnInit() {
  }
}
