import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PanelDisplayComponent } from './panel-display.component';
import { of } from 'rxjs';
import { NgArithmeticOperationsService, ErrorMsg } from 'ng-arithmetic-operations';

describe('PanelDisplayComponent', () => {
  let component: PanelDisplayComponent;
  let fixture: ComponentFixture<PanelDisplayComponent>;
  let ngAOService: NgArithmeticOperationsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PanelDisplayComponent]
    })
      .compileComponents();
  }));

  it('should create panel-display component', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    ngAOService = new NgArithmeticOperationsService();
  });

  it('should call getExpression and return displayNum in string type', async(() => {
    let response: string = '0';
    spyOn(ngAOService, 'getExpression').and.returnValue(of(response));
    component.getExpression();
    fixture.detectChanges();
    expect(component.displayNum).toEqual(response);
  }));

  it('should call getErrorMsg and return erroMsg in ErrorMsg type', async(() => {
    let response: ErrorMsg = <ErrorMsg>{};
    spyOn(ngAOService, 'getErrorMsg').and.returnValue(of(response));
    component.getExpression();
    fixture.detectChanges();
    expect(component.errorMsg).toEqual(response);
  }));

});
