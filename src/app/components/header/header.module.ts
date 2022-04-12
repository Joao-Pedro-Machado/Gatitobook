import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, MenuModule],
  exports: [HeaderComponent],
})
export class HeaderModule {}
