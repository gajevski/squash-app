import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvancedTutorialComponent } from './advanced-tutorial.component';

describe('AdvancedTutorialComponent', () => {
  let component: AdvancedTutorialComponent;
  let fixture: ComponentFixture<AdvancedTutorialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvancedTutorialComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdvancedTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
