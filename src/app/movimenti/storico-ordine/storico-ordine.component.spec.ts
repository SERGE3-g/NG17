import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoricoOrdineComponent } from './storico-ordine.component';

describe('StoricoOrdineComponent', () => {
  let component: StoricoOrdineComponent;
  let fixture: ComponentFixture<StoricoOrdineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoricoOrdineComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoricoOrdineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
