import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InforabidaComponent } from './inforabida.component';

describe('InforabidaComponent', () => {
  let component: InforabidaComponent;
  let fixture: ComponentFixture<InforabidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InforabidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InforabidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
