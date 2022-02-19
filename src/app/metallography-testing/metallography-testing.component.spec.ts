import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetallographyTestingComponent } from './metallography-testing.component';

describe('MetallographyTestingComponent', () => {
  let component: MetallographyTestingComponent;
  let fixture: ComponentFixture<MetallographyTestingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MetallographyTestingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MetallographyTestingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
