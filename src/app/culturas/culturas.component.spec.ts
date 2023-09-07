import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulturasComponent } from './culturas.component';

describe('CulturasComponent', () => {
  let component: CulturasComponent;
  let fixture: ComponentFixture<CulturasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CulturasComponent]
    });
    fixture = TestBed.createComponent(CulturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
