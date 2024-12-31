import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C02componentsComponent } from './c02components.component';

describe('C02componentsComponent', () => {
  let component: C02componentsComponent;
  let fixture: ComponentFixture<C02componentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [C02componentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(C02componentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
