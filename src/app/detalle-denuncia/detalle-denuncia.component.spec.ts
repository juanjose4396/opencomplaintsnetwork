import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleDenunciaComponent } from './detalle-denuncia.component';

describe('DetalleDenunciaComponent', () => {
  let component: DetalleDenunciaComponent;
  let fixture: ComponentFixture<DetalleDenunciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleDenunciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleDenunciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
