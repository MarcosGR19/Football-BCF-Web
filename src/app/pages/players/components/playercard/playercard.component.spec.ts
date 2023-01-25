import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayercardComponent } from './playercard.component';

describe('PlayercardComponent', () => {
  let component: PlayercardComponent;
  let fixture: ComponentFixture<PlayercardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayercardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlayercardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
