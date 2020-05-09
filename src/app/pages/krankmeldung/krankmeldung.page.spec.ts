import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KrankmeldungPage } from './krankmeldung.page';

describe('KrankmeldungPage', () => {
  let component: KrankmeldungPage;
  let fixture: ComponentFixture<KrankmeldungPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KrankmeldungPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KrankmeldungPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
