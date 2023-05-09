import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationContorlComponent } from './pagination-contorl.component';

describe('PaginationContorlComponent', () => {
  let component: PaginationContorlComponent;
  let fixture: ComponentFixture<PaginationContorlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationContorlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginationContorlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
