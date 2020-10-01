import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModalIntCompuestoComponent } from './modal-int-compuesto.component';

describe('ModalIntCompuestoComponent', () => {
  let component: ModalIntCompuestoComponent;
  let fixture: ComponentFixture<ModalIntCompuestoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalIntCompuestoComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModalIntCompuestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
