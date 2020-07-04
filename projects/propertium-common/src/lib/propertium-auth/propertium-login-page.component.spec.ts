import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertiumLoginPageComponent } from './propertium-login-page.component';

describe('PropertiumLoginPageComponent', () => {
  let component: PropertiumLoginPageComponent;
  let fixture: ComponentFixture<PropertiumLoginPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertiumLoginPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertiumLoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
