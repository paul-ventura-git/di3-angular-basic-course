import { Component } from '@angular/core';
import { CardBodyComponent } from '../subcomponents/card-body/card-body.component';
import { CardTitleComponent } from '../subcomponents/card-title/card-title.component';

@Component({
  selector: 'app-c00card',
  standalone: true,
  imports: [
    CardTitleComponent,
    CardBodyComponent,
  ],
  templateUrl: './c00card.component.html',
  styleUrl: './c00card.component.css'
})
export class C00cardComponent {

}
