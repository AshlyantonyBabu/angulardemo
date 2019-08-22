import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatacmpntComponent } from './datacmpnt.component';

describe('DatacmpntComponent', () => {
  let component: DatacmpntComponent;
  let fixture: ComponentFixture<DatacmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatacmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatacmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
