import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
        <div>
            <h1> Upcoming Angular Events </h1>
            <hr>
             <div class="row">
               <div class="col-md-5" *ngFor="let event of events" >
                 <event-thumbnail #thumbnail (eventClick)="handleEventClicked($event)" [event]="event"></event-thumbnail>
               </div>
              </div>
      </div>
      `
})
export class EventsListComponent implements OnInit {
  events: any[];
   constructor(private eventService: EventService) {

   }

   ngOnInit(): void {
    this.events = this.eventService.getEvents();
   }

   handleEventClicked(data) {
     console.log('received: ', data);
   }



}
