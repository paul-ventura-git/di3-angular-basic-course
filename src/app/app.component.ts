import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C01expressionsComponent } from "./c01expressions/c01expressions.component";
import { C02componentsComponent } from "./c02components/c02components.component";
import { C03inputPropertiesComponent } from "./c03input-properties/c03input-properties.component";
import { C04customEventsWithOutputsComponent } from "./c04custom-events-with-outputs/c04custom-events-with-outputs.component";
import { C05functionBasedOutputsComponent } from './c05function-based-outputs/c05function-based-outputs.component';
import { C06ngContentComponent } from './c06ng-content/c06ng-content.component';
import { C00randomComponentComponent } from './c00random-component/c00random-component.component';
import { C00cardComponent } from "./c00card/c00card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    C01expressionsComponent,
    C02componentsComponent,
    C03inputPropertiesComponent,
    C04customEventsWithOutputsComponent,
    C05functionBasedOutputsComponent,
    C06ngContentComponent,
    C00randomComponentComponent,
    C00cardComponent
],
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
