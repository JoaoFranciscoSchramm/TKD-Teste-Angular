import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TecnicaLinkComponent } from './tecnica-link.component';

describe('TecnicaLinkComponent', () => {
  let component: TecnicaLinkComponent;
  let fixture: ComponentFixture<TecnicaLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TecnicaLinkComponent]
    });
    fixture = TestBed.createComponent(TecnicaLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
