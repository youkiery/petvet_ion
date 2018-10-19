import { Injectable } from '@angular/core';

/*
  Generated class for the HttpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HttpProvider {
  constructor() {
  }
	fetch(url) {
		return new Promise((resolve) => {
			var xhttp = new XMLHttpRequest();
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var response = xhttp.responseText;
					resolve(response)
				}
			};
			xhttp.open("GET", url, true);
			xhttp.send();
		})
	}
	request(url, data) {
		return new Promise((resolve) => {
			var xhttp = new XMLHttpRequest();
			param = [];
			for(const name in data) {
				if(data.hasOwnProperty(name)) {
					const value = data[name];
					param.push({
						name: name,
						value: value
					})
				}
			}
			var param = data.map(e => {
				return e.name + "=" + e.value
			}).join("&")
			xhttp.open("POST", url, true);
			xhttp.send(param);
			xhttp.onreadystatechange = function() {
				if (this.readyState == 4 && this.status == 200) {
					var response = xhttp.responseText;
					resolve(response)
				}
			};
		})
	}
}
