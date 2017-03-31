import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageIdComponent } from './page-id.component';

describe('PageIdComponent', () => {
  let component: PageIdComponent;
  let fixture: ComponentFixture<PageIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
