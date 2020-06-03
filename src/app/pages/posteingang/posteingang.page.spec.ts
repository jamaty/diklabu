import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PosteingangPage } from './posteingang.page';

describe('PosteingangPage', () => {
  let component: PosteingangPage;
  let fixture: ComponentFixture<PosteingangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosteingangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PosteingangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
