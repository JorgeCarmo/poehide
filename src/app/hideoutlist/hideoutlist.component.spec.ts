import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HideoutlistComponent } from './hideoutlist.component';

describe('HideoutlistComponent', () => {
  let component: HideoutlistComponent;
  let fixture: ComponentFixture<HideoutlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HideoutlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HideoutlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
