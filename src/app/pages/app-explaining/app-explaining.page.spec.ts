import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AppExplainingPage } from './app-explaining.page';

describe('AppExplainingPage', () => {
  let component: AppExplainingPage;
  let fixture: ComponentFixture<AppExplainingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppExplainingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AppExplainingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
