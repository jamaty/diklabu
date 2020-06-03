import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PersonenPage } from './personen.page';

describe('PersonenPage', () => {
  let component: PersonenPage;
  let fixture: ComponentFixture<PersonenPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonenPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PersonenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
