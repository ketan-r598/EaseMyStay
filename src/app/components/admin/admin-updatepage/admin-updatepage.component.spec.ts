import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUpdatepageComponent } from './admin-updatepage.component';

describe('AdminUpdatepageComponent', () => {
  let component: AdminUpdatepageComponent;
  let fixture: ComponentFixture<AdminUpdatepageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminUpdatepageComponent]
    });
    fixture = TestBed.createComponent(AdminUpdatepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
