import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KlassensteckbriefPage } from './klassensteckbrief.page';

describe('KlassensteckbriefPage', () => {
  let component: KlassensteckbriefPage;
  let fixture: ComponentFixture<KlassensteckbriefPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlassensteckbriefPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KlassensteckbriefPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
