import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctiondelcationComponent } from './functiondelcation.component';

describe('FunctiondelcationComponent', () => {
  let component: FunctiondelcationComponent;
  let fixture: ComponentFixture<FunctiondelcationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctiondelcationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctiondelcationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
