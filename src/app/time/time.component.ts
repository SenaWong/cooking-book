import { Component, Attribute } from '@angular/core';

@Component({
  selector: 'time',
  template: `
    <p (updateTime)="updateMyTime()">{{date | date: 'yMMMdjms'}}</p>
  `,
  styleUrls: ['./time.component.css']
})
export class TimeComponent {
  private date;

  constructor(@Attribute("format") format) { 
    this.date =  new Date(); 
    
    setInterval(() => {
        this.date =  new Date();
     }, 1000);
  } 

}
