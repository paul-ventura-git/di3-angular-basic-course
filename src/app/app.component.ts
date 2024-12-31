import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C01expressionsComponent } from "./c01expressions/c01expressions.component";
import { C02componentsComponent } from "./c02components/c02components.component";
import { C03inputPropertiesComponent } from "./c03input-properties/c03input-properties.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C01expressionsComponent, C02componentsComponent, C03inputPropertiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di3-angular-basic-course';
}
