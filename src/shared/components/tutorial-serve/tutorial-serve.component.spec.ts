import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialServeComponent } from './tutorial-serve.component';

describe('TutorialServeComponent', () => {
  let component: TutorialServeComponent;
  let fixture: ComponentFixture<TutorialServeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TutorialServeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TutorialServeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
