import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoForItComponent } from './go-for-it.component';

describe('GoForItComponent', () => {
  let component: GoForItComponent;
  let fixture: ComponentFixture<GoForItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoForItComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoForItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
