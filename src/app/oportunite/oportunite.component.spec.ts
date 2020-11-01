import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OportuniteComponent } from './oportunite.component';

describe('OportuniteComponent', () => {
  let component: OportuniteComponent;
  let fixture: ComponentFixture<OportuniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OportuniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OportuniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
