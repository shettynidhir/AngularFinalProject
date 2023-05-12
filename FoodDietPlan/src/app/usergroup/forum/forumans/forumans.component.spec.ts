import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumansComponent } from './forumans.component';

describe('ForumansComponent', () => {
  let component: ForumansComponent;
  let fixture: ComponentFixture<ForumansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForumansComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
