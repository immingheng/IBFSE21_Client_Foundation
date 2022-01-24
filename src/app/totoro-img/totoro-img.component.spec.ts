import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoroImgComponent } from './totoro-img.component';

describe('TotoroImgComponent', () => {
  let component: TotoroImgComponent;
  let fixture: ComponentFixture<TotoroImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotoroImgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotoroImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
