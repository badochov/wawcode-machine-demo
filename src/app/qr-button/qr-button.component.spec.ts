import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QrButtonComponent } from './qr-button.component';

describe('QrButtonComponent', () => {
  let component: QrButtonComponent;
  let fixture: ComponentFixture<QrButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QrButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
