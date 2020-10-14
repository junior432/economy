import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProgram2Component } from './modal-program2.component';

describe('ModalProgram2Component', () => {
  let component: ModalProgram2Component;
  let fixture: ComponentFixture<ModalProgram2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProgram2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProgram2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
