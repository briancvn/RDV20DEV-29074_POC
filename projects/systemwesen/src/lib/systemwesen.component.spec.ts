import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemwesenComponent } from './systemwesen.component';

describe('SystemwesenComponent', () => {
  let component: SystemwesenComponent;
  let fixture: ComponentFixture<SystemwesenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemwesenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemwesenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
