import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OtherOptionsPage } from './other-options.page';

describe('OtherOptionsPage', () => {
  let component: OtherOptionsPage;
  let fixture: ComponentFixture<OtherOptionsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtherOptionsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OtherOptionsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
