import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AePagePage } from './ae-page.page';

describe('AePagePage', () => {
  let component: AePagePage;
  let fixture: ComponentFixture<AePagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AePagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AePagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
