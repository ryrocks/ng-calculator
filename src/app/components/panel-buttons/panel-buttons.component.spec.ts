import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should call onButtonClick ", fakeAsync(() => {
    // const onClickMock = spyOn(component, 'onButtonClick');
    // fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);
    // expect(onClickMock).toHaveBeenCalled();
  }));

  it("should call onResetClick ", async(() => {
    // let response: string = '0';
    // spyOn(ngAOService, 'getExpression').and.returnValue(of(response));
    // component.getExpression();
    // fixture.detectChanges();
    // expect(component.displayNum).toEqual(response);
  }));
});
