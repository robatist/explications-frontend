import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplicationListComponent } from './explication-list.component';

describe('ExplicationListComponent', () => {
  let component: ExplicationListComponent;
  let fixture: ComponentFixture<ExplicationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExplicationListComponent]
    });
    fixture = TestBed.createComponent(ExplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
