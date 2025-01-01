import { Component } from '@angular/core';

@Component({
  selector: 'app-c06ng-content',
  standalone: true,
  imports: [],
  templateUrl: './c06ng-content.component.html',
  styleUrl: './c06ng-content.component.css'
})
export class C06ngContentComponent {

}

/**
 * The <ng-content> element is neither a component nor DOM element.
 * Instead, it is a special placeholder that tells Angular where to render content.
 * Angular's compiler processes all <ng-content> elements at build-time.
 * You cannot insert, remove, or modify <ng-content> at run time.
 * You cannot add directives, styles, or arbitrary attributes to <ng-content>.
 *
 * You should not conditionally include <ng-content> with @if, @ for, or @switch.
 * Angular always instantiates and creates DOM nodes for content rendered to a <ng-content> placeholder,
 * even if that <ng-content> placeholder is hidden.
 */
