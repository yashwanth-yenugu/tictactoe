import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyUsersListComponent } from './my-users-list.component';

describe('MyUsersListComponent', () => {
  let component: MyUsersListComponent;
  let fixture: ComponentFixture<MyUsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyUsersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
