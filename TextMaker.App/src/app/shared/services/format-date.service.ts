import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class FormatDateService {
	format(date: Date): string {
		let month = '';
		switch (date.getMonth()) {
			case 0:
				month = 'Jan';
				break;
			case 1:
				month = 'Feb';
				break;
			case 2:
				month = 'Mar';
				break;
			case 3:
				month = 'Apr';
				break;
			case 4:
				month = 'May';
				break;
			case 5:
				month = 'Jun';
				break;
			case 6:
				month = 'Jul';
				break;
			case 7:
				month = 'Aug';
				break;
			case 8:
				month = 'Sep';
				break;
			case 9:
				month = 'Oct';
				break;
			case 10:
				month = 'Nov';
				break;
			case 11:
				month = 'Dec';
				break;
		}

		return `${date.getDate()}-${month}-${date.getFullYear()}`;
	}
}
