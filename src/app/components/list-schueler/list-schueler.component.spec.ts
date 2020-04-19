import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListSchuelerComponent } from './list-schueler.component';

describe('ListSchuelerComponent', () => {
  let component: ListSchuelerComponent;
  let fixture: ComponentFixture<ListSchuelerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSchuelerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListSchuelerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
