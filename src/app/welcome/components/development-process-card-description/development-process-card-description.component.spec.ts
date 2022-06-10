import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelopmentProcessCardDescriptionComponent } from './development-process-card-description.component';

describe('DevelopmentProcessCardDescriptionComponent', () => {
  let component: DevelopmentProcessCardDescriptionComponent;
  let fixture: ComponentFixture<DevelopmentProcessCardDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevelopmentProcessCardDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevelopmentProcessCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
