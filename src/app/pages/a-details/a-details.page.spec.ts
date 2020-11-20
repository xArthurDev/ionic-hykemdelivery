import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ADetailsPage } from './a-details.page';

describe('ADetailsPage', () => {
  let component: ADetailsPage;
  let fixture: ComponentFixture<ADetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ADetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ADetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
