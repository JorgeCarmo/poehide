import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideoutDetailComponent } from './hideout-detail.component';

describe('HideoutDetailComponent', () => {
  let component: HideoutDetailComponent;
  let fixture: ComponentFixture<HideoutDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideoutDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideoutDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
