import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InserirUsuarioComponent } from './inserir-usuario.component';

describe('InserirUsuarioComponent', () => {
  let component: InserirUsuarioComponent;
  let fixture: ComponentFixture<InserirUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InserirUsuarioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InserirUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
