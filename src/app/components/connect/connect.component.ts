import { Component, OnInit } from '@angular/core';
import { JsonImportService } from '../../services/json-import.service';

class connection
{
  connectionMedium: string;
  link: string;
  enabled: boolean;

  constructor(connectionMedium: string, link: string, enabled: boolean)
  {
    this.connectionMedium = connectionMedium;
    this.link = link;
    this.enabled = enabled;
  }
}

@Component({
  selector: 'app-connect',
  templateUrl: './connect.component.html',
  styleUrls: ['./connect.component.scss']
})
export class ConnectComponent implements OnInit {
  public connections:Array<connection> = new Array<connection>();

  constructor( private json: JsonImportService ) {
    json.jsonReady.subscribe(ready=>{
      if(ready.valueOf()){
        // Import from JSON File
        for(let connectionInstance of json.getConnections())
        {
          // Push to Display
          this.connections.push(new connection(connectionInstance.connectionMedium, connectionInstance.link, connectionInstance.enabled));
        }
      }
    })
  }

  getImportantLength():number
  {
    var tally:number = 0;
    for(let connectionInstance of this.connections)
    {
      if(connectionInstance.enabled)
      {
        tally++;
      }
    }
    return tally;
  }

  ngOnInit() {
  }
}
