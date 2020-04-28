import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupDinningsComponent } from './group-dinnings.component';

describe('GroupDinningsComponent', () => {
  let component: GroupDinningsComponent;
  let fixture: ComponentFixture<GroupDinningsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupDinningsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupDinningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
