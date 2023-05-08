import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionvalueComponent } from './nutritionvalue.component';

describe('NutritionvalueComponent', () => {
  let component: NutritionvalueComponent;
  let fixture: ComponentFixture<NutritionvalueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutritionvalueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NutritionvalueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
