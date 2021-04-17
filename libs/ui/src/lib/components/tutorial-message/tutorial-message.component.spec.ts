import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialMessageComponent } from './tutorial-message.component';

describe('TutorialMessageComponent', () => {
  let component: TutorialMessageComponent;
  let fixture: ComponentFixture<TutorialMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
