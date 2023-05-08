import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespchildComponent } from './respchild.component';

describe('RespchildComponent', () => {
  let component: RespchildComponent;
  let fixture: ComponentFixture<RespchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RespchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RespchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
