import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CrudPageRoutingModule } from './crud-routing.module';
import { CrudPage } from './crud.page';
import { ComponenteModule } from 'src/app/componente/componente.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudPageRoutingModule,
    ComponenteModule
  ],
  declarations: [CrudPage]
})
export class CrudPageModule {}
