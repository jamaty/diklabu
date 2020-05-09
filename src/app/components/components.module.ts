import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
 imports:      [ CommonModule, IonicModule ],
 declarations: [ HeaderComponent ],
 exports:      [ HeaderComponent, CommonModule, FormsModule, IonicModule ]
})
export class ComponentsModule { }