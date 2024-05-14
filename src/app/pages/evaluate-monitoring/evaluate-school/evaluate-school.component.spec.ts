import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluateSchoolComponent } from './evaluate-school.component';

describe('EvaluateSchoolComponent', () => {
  let component: EvaluateSchoolComponent;
  let fixture: ComponentFixture<EvaluateSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvaluateSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvaluateSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
