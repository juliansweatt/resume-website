import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EducationComponent } from './components/education/education.component';
import { EmploymentComponent } from './components/employment/employment.component';
import { 
  MatIconModule,
  MatCardModule,
  MatListModule,
  MatButtonModule,
  MatGridListModule,
  MatButtonToggleModule,
  MatToolbarModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
 } from "@angular/material";
import { SkillsComponent } from './components/skills/skills.component';
import { ConnectComponent } from './components/connect/connect.component'
import { HttpClientModule } from '@angular/common/http';
import { ProjectsComponent } from './components/projects/projects.component';

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    SkillsComponent,
    ConnectComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatGridListModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
