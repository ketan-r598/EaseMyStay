import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDetailpageComponent } from './admin-detailpage.component';

describe('AdminDetailpageComponent', () => {
  let component: AdminDetailpageComponent;
  let fixture: ComponentFixture<AdminDetailpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDetailpageComponent]
    });
    fixture = TestBed.createComponent(AdminDetailpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
