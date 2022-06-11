import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentProcessCardComponent } from './development-process-card.component';

describe('DevelopmentProcessCardComponent', () => {
  let component: DevelopmentProcessCardComponent;
  let fixture: ComponentFixture<DevelopmentProcessCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentProcessCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentProcessCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
