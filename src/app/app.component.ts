import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C01expressionsComponent } from "./c01expressions/c01expressions.component";
import { C02componentsComponent } from "./c02components/c02components.component";
import { C03inputPropertiesComponent } from "./c03input-properties/c03input-properties.component";
import { C04customEventsWithOutputsComponent } from "./c04custom-events-with-outputs/c04custom-events-with-outputs.component";
import { C05functionBasedOutputsComponent } from './c05function-based-outputs/c05function-based-outputs.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C01expressionsComponent, C02componentsComponent, C03inputPropertiesComponent, C04customEventsWithOutputsComponent, C05functionBasedOutputsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di3-angular-basic-course';

public otherQuantity = input.required<number>();

  public updateQuantity(newQuantity: number) {
    console.log(newQuantity);
  }
}
