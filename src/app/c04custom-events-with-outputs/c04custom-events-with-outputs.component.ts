import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-c04custom-events-with-outputs',
  standalone: true,
  imports: [],
  templateUrl: './c04custom-events-with-outputs.component.html',
  styleUrl: './c04custom-events-with-outputs.component.css'
})
export class C04customEventsWithOutputsComponent {
  @Output() myEvent = new EventEmitter<string>()
  myEventEmitter() {
    console.log('myEventEmitter()');
    this.myEvent.emit('Hello from myEventEmitter()');
  }
}
