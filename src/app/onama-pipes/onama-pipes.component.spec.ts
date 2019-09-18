import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OnamaPipesComponent } from './onama-pipes.component';

describe('OnamaPipesComponent', () => {
  let component: OnamaPipesComponent;
  let fixture: ComponentFixture<OnamaPipesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnamaPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnamaPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
