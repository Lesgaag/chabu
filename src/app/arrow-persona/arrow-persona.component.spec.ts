import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowPersonaComponent } from './arrow-persona.component';

describe('ArrowPersonaComponent', () => {
  let component: ArrowPersonaComponent;
  let fixture: ComponentFixture<ArrowPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrowPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrowPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
