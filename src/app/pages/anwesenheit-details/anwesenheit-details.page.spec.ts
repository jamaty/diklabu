import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnwesenheitDetailsPage } from './anwesenheit-details.page';

describe('AnwesenheitDetailsPage', () => {
  let component: AnwesenheitDetailsPage;
  let fixture: ComponentFixture<AnwesenheitDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnwesenheitDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnwesenheitDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
