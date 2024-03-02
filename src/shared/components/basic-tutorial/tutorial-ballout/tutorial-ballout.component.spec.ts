import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialBalloutComponent } from './tutorial-ballout.component';

describe('TutorialBalloutComponent', () => {
  let component: TutorialBalloutComponent;
  let fixture: ComponentFixture<TutorialBalloutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialBalloutComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialBalloutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
