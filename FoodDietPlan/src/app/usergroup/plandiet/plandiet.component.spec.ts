import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlandietComponent } from './plandiet.component';

describe('PlandietComponent', () => {
  let component: PlandietComponent;
  let fixture: ComponentFixture<PlandietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlandietComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlandietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
