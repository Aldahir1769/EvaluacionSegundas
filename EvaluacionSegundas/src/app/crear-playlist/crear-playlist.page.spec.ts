import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearPlaylistPage } from './crear-playlist.page';

describe('CrearPlaylistPage', () => {
  let component: CrearPlaylistPage;
  let fixture: ComponentFixture<CrearPlaylistPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CrearPlaylistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
