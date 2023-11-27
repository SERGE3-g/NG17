import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdineInCorsoComponent } from './ordine-in-corso.component';

describe('OrdineInCorsoComponent', () => {
  let component: OrdineInCorsoComponent;
  let fixture: ComponentFixture<OrdineInCorsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrdineInCorsoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OrdineInCorsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
