import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

import { PanelButtonsComponent } from './panel-buttons.component';
import { By } from "@angular/platform-browser";
import { of } from 'rxjs';
import { NgArithmeticOperationsService } from 'ng-arithmetic-operations';

describe('PanelButtonsComponent', () => {
  let component: PanelButtonsComponent;
  let fixture: ComponentFixture<PanelButtonsComponent>;
  let ngAOService: NgArithmeticOperationsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelButtonsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ngAOService = new NgArithmeticOperationsService();
  });

  it('should create panel-buttons component', () => {
    expect(component).toBeTruthy();
  });

  it('should call onButtonClick', fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onButtonClick');
    let btn = fixture.debugElement.queryAll(By.css('.normalBtn'));
    for (let i = 0; i < btn.length; i++) {
      btn[i].triggerEventHandler('click', null);
    }
    
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(component.onButtonClick).toHaveBeenCalled();
  }));

  it("should call onResetClick ", fakeAsync(() => {
    fixture.detectChanges();
    spyOn(component, 'onResetClick');
    let btn = fixture.debugElement.query(By.css('.resetBtn'));
    btn.triggerEventHandler('click', null);
    tick(); // simulates the passage of time until all pending asynchronous activities finish
    fixture.detectChanges();
    expect(component.onResetClick).toHaveBeenCalled();
  }));
});
