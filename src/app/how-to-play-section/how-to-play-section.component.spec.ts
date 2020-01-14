import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowToPlaySectionComponent } from './how-to-play-section.component';

describe('HowToPlaySectionComponent', () => {
  let component: HowToPlaySectionComponent;
  let fixture: ComponentFixture<HowToPlaySectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowToPlaySectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowToPlaySectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
