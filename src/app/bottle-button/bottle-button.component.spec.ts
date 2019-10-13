import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BottleButtonComponent } from './bottle-button.component';

describe('BottleButtonComponent', () => {
  let component: BottleButtonComponent;
  let fixture: ComponentFixture<BottleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BottleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BottleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
