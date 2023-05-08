import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispProdComponent } from './disp-prod.component';

describe('DispProdComponent', () => {
  let component: DispProdComponent;
  let fixture: ComponentFixture<DispProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispProdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DispProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
