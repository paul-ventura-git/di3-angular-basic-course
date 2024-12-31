import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { C01expressionsComponent } from "./c01expressions/c01expressions.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, C01expressionsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'di3-angular-basic-course';
}
