import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainUserPage } from './main-user';

@NgModule({
  declarations: [
    MainUserPage,
  ],
  imports: [
    IonicPageModule.forChild(MainUserPage),
  ],
})
export class MainUserPageModule {}
