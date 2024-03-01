import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialRallyComponent } from './tutorial-rally.component';

describe('TutorialRallyComponent', () => {
  let component: TutorialRallyComponent;
  let fixture: ComponentFixture<TutorialRallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialRallyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialRallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
