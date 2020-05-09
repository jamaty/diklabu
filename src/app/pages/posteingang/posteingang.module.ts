import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PosteingangPageRoutingModule } from './posteingang-routing.module';

import { PosteingangPage } from './posteingang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PosteingangPageRoutingModule
  ],
  declarations: [PosteingangPage]
})
export class PosteingangPageModule {}
