import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InfoDetailsPage } from './info-details.page';

describe('InfoDetailsPage', () => {
  let component: InfoDetailsPage;
  let fixture: ComponentFixture<InfoDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoDetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InfoDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
