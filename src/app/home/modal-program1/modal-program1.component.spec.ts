import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalProgram1Component } from './modal-program1.component';

describe('ModalProgram1Component', () => {
  let component: ModalProgram1Component;
  let fixture: ComponentFixture<ModalProgram1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalProgram1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalProgram1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
