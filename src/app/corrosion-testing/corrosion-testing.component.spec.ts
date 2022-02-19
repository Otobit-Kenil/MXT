import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrosionTestingComponent } from './corrosion-testing.component';

describe('CorrosionTestingComponent', () => {
  let component: CorrosionTestingComponent;
  let fixture: ComponentFixture<CorrosionTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrosionTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrosionTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
