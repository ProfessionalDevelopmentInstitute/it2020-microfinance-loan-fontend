import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGuarantorComponent } from './update-guarantor.component';

describe('UpdateGuarantorComponent', () => {
  let component: UpdateGuarantorComponent;
  let fixture: ComponentFixture<UpdateGuarantorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGuarantorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGuarantorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
