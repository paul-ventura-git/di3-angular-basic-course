import { Component, EventEmitter, input, output, Output } from '@angular/core';

@Component({
  selector: 'app-c04custom-events-with-outputs',
  standalone: true,
  imports: [],
  templateUrl: './c04custom-events-with-outputs.component.html',
  styleUrl: './c04custom-events-with-outputs.component.css'
})
export class C04customEventsWithOutputsComponent {
  // @Output() myEvent = new EventEmitter<string>()
  public quantity = input.required<number>();
  public onIncrementQuantity = output<number>();

  public incrementQuantity(): void {
    this.onIncrementQuantity.emit(this.quantity() + 1);
  }
}
