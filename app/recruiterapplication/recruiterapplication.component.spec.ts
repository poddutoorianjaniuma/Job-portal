import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruiterapplicationComponent } from './recruiterapplication.component';

describe('RecruiterapplicationComponent', () => {
  let component: RecruiterapplicationComponent;
  let fixture: ComponentFixture<RecruiterapplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecruiterapplicationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruiterapplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
