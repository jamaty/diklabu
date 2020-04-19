import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AnwesenheitPage } from './anwesenheit.page';

describe('AnwesenheitPage', () => {
  let component: AnwesenheitPage;
  let fixture: ComponentFixture<AnwesenheitPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnwesenheitPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AnwesenheitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
