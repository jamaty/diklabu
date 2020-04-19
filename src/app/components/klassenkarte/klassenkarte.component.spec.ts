import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { KlassenkarteComponent } from './klassenkarte.component';

describe('KlassenkarteComponent', () => {
  let component: KlassenkarteComponent;
  let fixture: ComponentFixture<KlassenkarteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KlassenkarteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(KlassenkarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
