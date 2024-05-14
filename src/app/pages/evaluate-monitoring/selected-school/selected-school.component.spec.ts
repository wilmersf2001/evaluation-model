import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSchoolComponent } from './selected-school.component';

describe('SelectedSchoolComponent', () => {
  let component: SelectedSchoolComponent;
  let fixture: ComponentFixture<SelectedSchoolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectedSchoolComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectedSchoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
