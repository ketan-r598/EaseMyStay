import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminAddpageComponent } from './admin-addpage.component';

describe('AdminAddpageComponent', () => {
  let component: AdminAddpageComponent;
  let fixture: ComponentFixture<AdminAddpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminAddpageComponent]
    });
    fixture = TestBed.createComponent(AdminAddpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
