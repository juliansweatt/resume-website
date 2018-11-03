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
 } from "@angular/material";
import { RouterModule } from "@angular/router";
import { SkillsComponent } from './components/skills/skills.component';
import { ConnectComponent } from './components/connect/connect.component'

@NgModule({
  declarations: [
    AppComponent,
    EducationComponent,
    EmploymentComponent,
    SkillsComponent,
    ConnectComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: "resume", component: AppComponent}
    ]),
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
