import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoMovimentiComponent } from './storico-movimenti.component';

describe('StoricoMovimentiComponent', () => {
  let component: StoricoMovimentiComponent;
  let fixture: ComponentFixture<StoricoMovimentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoricoMovimentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoricoMovimentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
