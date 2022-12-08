import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuehrerwesenComponent } from './fuehrerwesen.component';

describe('FuehrerwesenComponent', () => {
  let component: FuehrerwesenComponent;
  let fixture: ComponentFixture<FuehrerwesenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuehrerwesenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FuehrerwesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
