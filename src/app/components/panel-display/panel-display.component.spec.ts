import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelDisplayComponent } from './panel-display.component';

describe('PanelDisplayComponent', () => {
  let component: PanelDisplayComponent;
  let fixture: ComponentFixture<PanelDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
