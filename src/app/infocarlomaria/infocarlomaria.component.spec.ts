import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocarlomariaComponent } from './infocarlomaria.component';

describe('InfocarlomariaComponent', () => {
  let component: InfocarlomariaComponent;
  let fixture: ComponentFixture<InfocarlomariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocarlomariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocarlomariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
