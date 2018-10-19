import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MainUserPage } from '../pages/main-user/main-user';

import { LangProvider } from '../providers/lang/lang';
import { ImageProvider } from '../providers/image/image';
import { HttpProvider } from '../providers/http/http';
import { TempDataProvider } from '../providers/temp-data/temp-data';

@NgModule({
  declarations: [
    MyApp,
		HomePage,
		MainUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
		HomePage,
		MainUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LangProvider,
    ImageProvider,
    HttpProvider,
    TempDataProvider
  ]
})
export class AppModule {}
