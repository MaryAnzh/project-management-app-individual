import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCreateBoardComponent } from './modal-create-board.component';

describe('ModalCreateBoardComponent', () => {
  let component: ModalCreateBoardComponent;
  let fixture: ComponentFixture<ModalCreateBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalCreateBoardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCreateBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
