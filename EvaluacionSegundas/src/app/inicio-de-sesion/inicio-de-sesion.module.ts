import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioDeSesionPageRoutingModule } from './inicio-de-sesion-routing.module';

import { InicioDeSesionPage } from './inicio-de-sesion.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    InicioDeSesionPageRoutingModule
  ],
  declarations: [InicioDeSesionPage]
})
export class InicioDeSesionPageModule {}
