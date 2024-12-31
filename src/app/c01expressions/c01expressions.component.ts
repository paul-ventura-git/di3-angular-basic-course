import { Component } from '@angular/core';

@Component({
  selector: 'app-c01expressions',
  standalone: true,
  imports: [],
  templateUrl: './c01expressions.component.html',
  styleUrl: './c01expressions.component.css'
})
export class C01expressionsComponent {

  myCol: string = 'lightblue';
  quantity: number = 4889;
  cost: number = 4488.99;
}
