import { Injectable } from '@angular/core';

@Injectable()
export class TempDataProvider {
	image: string = 'assets/shop/general/'
	product: {
		name: string,
		image: string,
		sale: number,
		description: string,
		cate: number[],
		size: {
			name: string,
			price: number,
			number: number
		}[]
	}[]
	category: {
		id: number,
		name: string,
		description: string,
		product: number[]
	}[]
  constructor() {
		this.category[0] = {
			id: 0,
			name: 'Thức ăn',
			description: 'Thức ăn hạt, đóng hộp, sữa, xương trắng răng cho chó mèo',
			product: []
		}
		this.category[1] = {
			id: 1,
			name: 'Vật dụng',
			description: 'Đồ chơi, vật dụng, phụ kiện chó mèo',
			product: []
		}
		this.category[3] = {
			id: 2,
			name: 'Sản phẩm bán chạy',
			description: 'Sản phẩm thường hay được người tiêu dùng lựa chọn gần đây',
			product: []
		}
		this.product = [{
			name: 'Thức ăn chó A',
			image: this.image + 'dog-food.png',
			sale: 0,
			description: 'Thức ăn cho chó classic',
			cate: [0, 3],
			size: [{
				name: '500g',
				price: 28,
				number: 1
			}]
		},
		{
			name: 'Thức ăn mèo A',
			image: this.image + 'cat-food.png',
			sale: 0,
			description: 'Thức ăn cho mèo minino',
			cate: [0, 3],
			size: [{
				name: '500g',
				price: 24,
				number: 0
			}]
		},
		{
			name: 'Vòng cổ A',
			image: this.image + 'neckle.png',
			sale: 0,
			description: 'Vòng cổ dề',
			cate: [1],
			size: [{
				name: 'nhỏ',
				price: 15,
				number: 1
			},
			{
				name: 'trung',
				price: 25,
				number: 1
			},
			{
				name: 'lớn',
				price: 35,
				number: 1
			}]
		},
		{
			name: 'Đồ chơi A',
			image: this.image + 'toy.png',
			sale: 32,
			description: 'Đồ chơi cào mèo',
			cate: [1, 3],
			size: [{
				name: 'nhỏ',
				price: 85,
				number: 1
			},
			{
				name: 'trung',
				price: 105,
				number: 1
			}]
		}]
  }

}
