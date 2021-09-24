import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEditarClientesComponent } from './criar-editar-clientes.component';

describe('CriarEditarClientesComponent', () => {
  let component: CriarEditarClientesComponent;
  let fixture: ComponentFixture<CriarEditarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriarEditarClientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarEditarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
