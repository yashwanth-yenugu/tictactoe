import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TicTokComponent } from './tic-tok.component';

describe('TicTokComponent', () => {
  let component: TicTokComponent;
  let fixture: ComponentFixture<TicTokComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TicTokComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TicTokComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
