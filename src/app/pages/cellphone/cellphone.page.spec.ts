import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CellphonePage } from './cellphone.page';

describe('CellphonePage', () => {
  let component: CellphonePage;
  let fixture: ComponentFixture<CellphonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CellphonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CellphonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
