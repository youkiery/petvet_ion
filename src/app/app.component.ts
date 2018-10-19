import { Component } from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MainUserPage } from '../pages/main-user/main-user';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public event: Events) {
    platform.ready().then(() => {
      statusBar.styleDefault();
			splashScreen.hide();
			
			this.event.subscribe("preload-complete", () => {
				this.rootPage = MainUserPage;
			})
    });
  }
}

