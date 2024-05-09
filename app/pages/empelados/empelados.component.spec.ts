import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpeladosComponent } from './empelados.component';

describe('EmpeladosComponent', () => {
  let component: EmpeladosComponent;
  let fixture: ComponentFixture<EmpeladosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmpeladosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpeladosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
