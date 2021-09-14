import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepostcomponentComponent } from './singlepostcomponent.component';

describe('SinglepostcomponentComponent', () => {
  let component: SinglepostcomponentComponent;
  let fixture: ComponentFixture<SinglepostcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepostcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglepostcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
