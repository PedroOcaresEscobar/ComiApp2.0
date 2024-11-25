import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComiMapsPage } from './comi-maps.page';

describe('ComiMapsPage', () => {
  let component: ComiMapsPage;
  let fixture: ComponentFixture<ComiMapsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiMapsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
