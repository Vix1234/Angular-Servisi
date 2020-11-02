import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoviNalogComponent } from './novi-nalog.component';

describe('NoviNalogComponent', () => {
  let component: NoviNalogComponent;
  let fixture: ComponentFixture<NoviNalogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoviNalogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoviNalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
