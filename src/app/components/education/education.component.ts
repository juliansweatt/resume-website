import { Component, OnInit } from '@angular/core';
import { date, location } from 'src/app/app.component';
import { JsonImportService } from '../../services/json-import.service';

class education
{
  institution: string;
  startDate: date;
  endDate: date;
  degree: string;
  gpa: number;
  location: location;
  courses: Array<string>;
  graduated: string;
  important: boolean;

  constructor(institution: string, startDate: date, endDate: date, degree: string, gpa: number, location: location, courses: Array<string> = null, graduated: string = null, important: boolean = true)
  {
    this.institution = institution;
    this.startDate = startDate;
    this.endDate = endDate;
    this.degree = degree;
    this.gpa = gpa;
    this.location = location;
    this.courses = courses;
    this.graduated = graduated;
    this.important = important;
  }
}

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educationHistory: Array<education> = new Array();
  displayAll:boolean = false;

  constructor( private json: JsonImportService ) {
    // Import from JSON File
    for(let educationInstance of json.getEducation())
    {
      // Transform Object(s)
      let startDate = new date(educationInstance.startDate.month, educationInstance.startDate.day, educationInstance.startDate.year);
      let endDate = new date(educationInstance.endDate.month, educationInstance.endDate.day, educationInstance.endDate.year);
      let institutionLocation = new location(educationInstance.location.city, educationInstance.location.zipCode, educationInstance.location.state, educationInstance.location.country);
      
      // Push to Display
      this.educationHistory.push(new education(educationInstance.institution, startDate, endDate, educationInstance.degree, educationInstance.gpa, institutionLocation, educationInstance.courses, educationInstance.graduated, educationInstance.important));
    }
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
