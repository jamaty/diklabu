import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KalenderPage } from './kalender.page';

describe('KalenderPage', () => {
  let component: KalenderPage;
  let fixture: ComponentFixture<KalenderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KalenderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KalenderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
