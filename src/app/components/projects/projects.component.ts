import { Component, OnInit } from '@angular/core';
import { date, location } from 'src/app/app.component';
import { JsonImportService } from '../../services/json-import.service';

class project
{
  name: string;
  role: string;
  organization: string;
  location: location;
  details: Array<string>;
  link: string;
  important: boolean;

  constructor(name: string, role:string, organization:string, location: location, details: Array<string> = new Array(), link:string ="", important:boolean = true)
  {
    this.name=name;
    this.role=role;
    this.organization=organization;
    this.location=location;
    this.details=details;
    this.link=link;
    this.important=important;
  }
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectList:Array<project> = new Array();
  displayAll:boolean = true;

  constructor( private json:JsonImportService ) {
    json.jsonReady.subscribe(ready=>{
      if(ready.valueOf())
      {
        // Import from JSON File
        for(let projectInstance of json.getProjects())
        {
          // Transform Object(s)
          let projectLocation = new location(projectInstance.location.city, projectInstance.location.zipCode, projectInstance.location.state, projectInstance.location.country);

          // Push to Display
          this.projectList.push(new project(projectInstance.name, projectInstance.role, projectInstance.organization, projectLocation, projectInstance.details, projectInstance.link, projectInstance.important));
        }
      }
    })
  }

  toggleShow()
  {
    if(this.displayAll)
    {
      this.displayAll = false;
    }
    else{
      this.displayAll = true;
    }
  }


  ngOnInit() {
  }

}
