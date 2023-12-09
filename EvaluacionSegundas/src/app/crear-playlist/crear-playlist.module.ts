import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearPlaylistPageRoutingModule } from './crear-playlist-routing.module';

import { CrearPlaylistPage } from './crear-playlist.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CrearPlaylistPageRoutingModule
  ],
  declarations: [CrearPlaylistPage]
})
export class CrearPlaylistPageModule {}
