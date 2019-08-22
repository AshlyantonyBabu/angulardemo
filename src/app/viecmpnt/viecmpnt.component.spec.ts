import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViecmpntComponent } from './viecmpnt.component';

describe('ViecmpntComponent', () => {
  let component: ViecmpntComponent;
  let fixture: ComponentFixture<ViecmpntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViecmpntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViecmpntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
