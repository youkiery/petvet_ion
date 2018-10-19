import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { ImageProvider } from '../../providers/image/image';
import { LangProvider } from '../../providers/lang/lang';
import { HttpProvider } from '../../providers/http/http';
import { TempDataProvider } from '../../providers/temp-data/temp-data';

@IonicPage()
@Component({
  selector: 'page-main-user',
  templateUrl: 'main-user.html',
})
export class MainUserPage {
	search_key: string = ''
	search_prod: {
		id: number,
		name: string,
		description: string,
		product: number[]
	}[]
	constructor(public image: ImageProvider, public lang: LangProvider, public http: HttpProvider,
		public temp: TempDataProvider) {
			temp.product.forEach((prod, index) => {
				var price = 0, number = false;
				prod['size'].forEach(e => {
					if(!price || (price && price < e['price'])) price = e['price'];
					if(e['number'] > 0) number = true;
				})
				if(prod['sale']) {
					prod['price'] = Math.ceil(price * (1 - prod['sale'] / 100));
				}
				else {
					prod['price'] = price;
				}
				prod['price'] =  (prod['price'] * 1000).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");            

				prod['number'] = number;
				var cate = [];
				prod['cate'].forEach(e => {
					if(this.temp.category[e]) {
						this.temp.category[e]['product'].push(index)
						cate.push(index)
					}
				})
				prod['cate'] = cate;
				temp.product[index] = prod
			});
			this.search_prod = this.temp.category;
	}
	searchProd() {
		this.search_prod.forEach(e => {
			e.product = []
		});
		this.temp.product.forEach((f, fi) => {
			var eng = this.eng(f['name']);
			if(eng.search(this.search_key.toLocaleLowerCase()) >= 0) {
				f['cate'].forEach(e => {
					this.temp.category[e]['product'].push(fi)
				})
			}				
		})
	}
	searchCancel() {
		this.search_prod = this.temp.category;
	}
	eng(str) { 
    str= str.toLowerCase();
    str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str= str.replace(/đ/g,"d"); 
    str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
    str= str.replace(/-+-/g,"-");
    str= str.replace(/^\-+|\-+$/g,""); 
    return str; 
	}
}
