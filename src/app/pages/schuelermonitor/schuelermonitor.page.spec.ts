import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchuelermonitorPage } from './schuelermonitor.page';

describe('SchuelermonitorPage', () => {
  let component: SchuelermonitorPage;
  let fixture: ComponentFixture<SchuelermonitorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchuelermonitorPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchuelermonitorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
