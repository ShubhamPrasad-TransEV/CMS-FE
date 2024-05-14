import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsCardComponent } from './cms-card.component';

describe('CmsCardComponent', () => {
  let component: CmsCardComponent;
  let fixture: ComponentFixture<CmsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CmsCardComponent]
    });
    fixture = TestBed.createComponent(CmsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
