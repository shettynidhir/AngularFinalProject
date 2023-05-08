import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultexpertComponent } from './consultexpert.component';

describe('ConsultexpertComponent', () => {
  let component: ConsultexpertComponent;
  let fixture: ComponentFixture<ConsultexpertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultexpertComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultexpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
