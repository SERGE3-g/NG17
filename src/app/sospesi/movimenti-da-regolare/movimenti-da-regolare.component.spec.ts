import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovimentiDaRegolareComponent } from './movimenti-da-regolare.component';

describe('MovimentiDaRegolareComponent', () => {
  let component: MovimentiDaRegolareComponent;
  let fixture: ComponentFixture<MovimentiDaRegolareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovimentiDaRegolareComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovimentiDaRegolareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
