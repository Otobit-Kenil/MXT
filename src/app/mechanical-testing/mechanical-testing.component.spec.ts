import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicalTestingComponent } from './mechanical-testing.component';

describe('MechanicalTestingComponent', () => {
  let component: MechanicalTestingComponent;
  let fixture: ComponentFixture<MechanicalTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicalTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MechanicalTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
