import { Component, OnInit } from '@angular/core';
import { date, location } from 'src/app/app.component';
import { JsonImportService } from '../../services/json-import.service';

class job
{
  employer: string;
  startDate: date;
  endDate: date;
  jobTitle: string;
  location: location;
  details: Array<string>;
  important: boolean;

  constructor(employer: string, startDate:date, endDate:date, jobTitle:string, 
    location: location, details: Array<string> = new Array(), important:boolean = true)
  {
    this.employer= employer;
    this.startDate=startDate;
    this.endDate=endDate;
    this.jobTitle=jobTitle;
    this.location=location;
    this.details=details;
    this.important=important;
  }
}

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  employmentHistory:Array<job> = new Array();
  displayAll:boolean = false;

  constructor( private json:JsonImportService ) {
    // Import from JSON File
    for(let employmentInstance of json.getEmployment())
    {
      // Transform Object(s)
      let startDate = new date(employmentInstance.startDate.month, employmentInstance.startDate.day, employmentInstance.startDate.year);
      let endDate = new date(employmentInstance.endDate.month, employmentInstance.endDate.day, employmentInstance.endDate.year);
      let businessLocation = new location(employmentInstance.location.city, employmentInstance.location.zipCode, employmentInstance.location.state, employmentInstance.location.country);

      // Push to Display
      this.employmentHistory.push(new job(employmentInstance.employer, startDate, endDate, employmentInstance.jobTitle, businessLocation, employmentInstance.details, employmentInstance.important));
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
