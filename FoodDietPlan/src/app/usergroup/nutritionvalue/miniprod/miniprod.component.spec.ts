import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniprodComponent } from './miniprod.component';

describe('MiniprodComponent', () => {
  let component: MiniprodComponent;
  let fixture: ComponentFixture<MiniprodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniprodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
