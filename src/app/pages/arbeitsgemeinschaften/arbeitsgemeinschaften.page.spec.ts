import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArbeitsgemeinschaftenPage } from './arbeitsgemeinschaften.page';

describe('ArbeitsgemeinschaftenPage', () => {
  let component: ArbeitsgemeinschaftenPage;
  let fixture: ComponentFixture<ArbeitsgemeinschaftenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArbeitsgemeinschaftenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArbeitsgemeinschaftenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
