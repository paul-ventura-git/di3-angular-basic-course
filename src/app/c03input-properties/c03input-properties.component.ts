import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-c03input-properties',
  standalone: true,
  imports: [],
  templateUrl: './c03input-properties.component.html',
  styleUrl: './c03input-properties.component.css'
})
export class C03inputPropertiesComponent {
  @Input() value = 0;
  @Input() requiredInput = '';
  @Input({transform: trimString}) transformedInput = '';
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}
