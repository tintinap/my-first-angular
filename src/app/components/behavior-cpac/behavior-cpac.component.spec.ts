import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorCpacComponent } from './behavior-cpac.component';

describe('BehaviorCpacComponent', () => {
  let component: BehaviorCpacComponent;
  let fixture: ComponentFixture<BehaviorCpacComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehaviorCpacComponent]
    });
    fixture = TestBed.createComponent(BehaviorCpacComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
