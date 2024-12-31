import { booleanAttribute, Component, Input, numberAttribute } from '@angular/core';

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
  @Input({transform: appendPx}) typeCheckedInput: string = '';
  @Input({transform: booleanAttribute}) someBooleanAttribute = false; // 'true' or 'false' string will be converted to boolean
  @Input({transform: numberAttribute}) someNumberAttribute = 0; // attempts to parse the given value to a number, producing NaN if parsing fails.
  @Input({alias: 'inputWithAlias'}) inputWithoutAlias = '';
  @Input()
  get myValue(): number {
    return this.internalValue;
  }

  set myValue(newValue: number) {
    this.internalValue = newValue;
  }

  private internalValue = 0;
}

function trimString(value: string | undefined) {
  return value?.trim() ?? '';
}

function appendPx(value: string | number | undefined) {
  if (typeof value === 'number') {
    return `${value}px`;
  }
  return value;
}

/**
 *
 * The most common use-case for input transforms is to accept a wider range
 * of value types in templates, often including null and undefined.
 *
 * Input transform function must be statically analyzable at build-time.
 * You cannot set transform functions conditionally or as the result of an expression evaluation.
 *
 * Input transform functions should always be pure functions.
 * Relying on state outside of the transform function can lead to unpredictable behavior.
 *
 * Prefer using input transforms instead of getters and setters if possible.
 * Avoid complex or costly getters and setters.
 * Angular may invoke an input's setter multiple times, which may negatively impact application performance
 * if the setter performs any costly behaviors, such as DOM manipulation.
 *
 *
 *
 *
 *
 */
