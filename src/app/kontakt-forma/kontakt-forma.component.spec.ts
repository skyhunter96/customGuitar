import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KontaktFormaComponent } from './kontakt-forma.component';

describe('KontaktFormaComponent', () => {
  let component: KontaktFormaComponent;
  let fixture: ComponentFixture<KontaktFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KontaktFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KontaktFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
