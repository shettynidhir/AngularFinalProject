import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietdescComponent } from './dietdesc.component';

describe('DietdescComponent', () => {
  let component: DietdescComponent;
  let fixture: ComponentFixture<DietdescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietdescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DietdescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
