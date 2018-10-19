import { Component } from '@angular/core';
import { Events } from 'ionic-angular';

import { LangProvider } from '../../providers/lang/lang';
import { ImageProvider } from '../../providers/image/image';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	loading_percent = 0;
  constructor(public event: Events, public lang: LangProvider, public image: ImageProvider) {
		var interval = setInterval(() => {
			this.loading_percent ++;
			if(this.loading_percent == 100) {
				clearInterval(interval);
				setTimeout(() => {
					this.event.publish("preload-complete");
				}, 50)
			}
		}, 5)
  }
}
