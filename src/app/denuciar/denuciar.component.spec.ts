import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DenuciarComponent } from './denuciar.component';

describe('DenuciarComponent', () => {
  let component: DenuciarComponent;
  let fixture: ComponentFixture<DenuciarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DenuciarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DenuciarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
