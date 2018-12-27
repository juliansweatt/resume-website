import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'q';

interface JsonResume {
	name: string;
	education: Array<JsonEducation>;
	employment: Array<JsonEmployment>;
	skills: Array<JsonSkill>;
	shuffleSkills: boolean;
	connections: Array<JsonConnection>;
}

interface JsonEducation {
	institution: string;
	startDate: {
		month: number;
		day: number;
		year: number;
	};
	endDate: {
		month: number;
		day: number;
		year: number;
	};
	degree: string;
	gpa: number;
	location: {
		city: string;
		zipCode: number;
		state: string;
		country: string;
	};
	courses: Array<string>;
	graduated: string;
	important: boolean;
}

interface JsonEmployment {
	employer: string;
	startDate: {
		month: number;
		day: number;
		year: number;
	};
	endDate: {
		month: number;
		day: number;
		year: number;
	};
	jobTitle: string;
	location: {
		city: string;
		zipCode: number;
		state: string;
		country: string;
	};
	details: Array<string>;
	important: boolean;
}

interface JsonSkill {
	name: string;
	skillLevel: number;
	category: string;
}

interface JsonConnection {
	connectionMedium: string;
	link: string;
  	enabled: boolean;
}

@Injectable({
	providedIn: 'root'
})
export class JsonImportService {
	private jsonData: JsonResume = <JsonResume> null;

	private ready = new BehaviorSubject(false);
	public jsonReady = this.ready.asObservable();

	constructor(private http: HttpClient) { 
		this.http.get('http://www.juliansweatt.com/assets/resume-source/resume.json')
			.subscribe((data:any) => {
				this.jsonData = data;
				console.log("Resume built from JSON data:", this.jsonData);
				if(this.jsonData)
				{
					this.ready.next(true);
				}
		})
	}

	public getEducation():Array<JsonEducation>
	{	
		return this.jsonData.education;
	};

	public getEmployment():Array<JsonEmployment>
	{
		return this.jsonData.employment;
	};

	public getSkills(): Array<JsonSkill>
	{
		return this.jsonData.skills;
	};

	public shouldShuffleSkills(): boolean
	{
		return this.jsonData.shuffleSkills;
	}

	public getConnections(): Array<JsonConnection>
	{
		return this.jsonData.connections;
	}
}
