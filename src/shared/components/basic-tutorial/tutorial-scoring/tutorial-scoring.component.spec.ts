import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialScoringComponent } from './tutorial-scoring.component';

describe('TutorialScoringComponent', () => {
  let component: TutorialScoringComponent;
  let fixture: ComponentFixture<TutorialScoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialScoringComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
