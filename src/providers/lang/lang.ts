import { Injectable } from '@angular/core';

@Injectable()
export class LangProvider {
	title: string = "Shop - Bệnh viện thú cưng Thanh Xuân";
	loading: string = "Đang tải dữ liệu, vui lòng chờ trong giây lát";
	finish: string = "Hoàn tất";
	soldout: string = "Hết hàng";
  constructor() {
		
  }
}
