import { TestBed } from '@angular/core/testing';
import { FormatDateService } from './format-date.service';

describe('Service: FormatDateService', () => {
	let formatDateService: FormatDateService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [FormatDateService]
		});
		formatDateService = TestBed.get(FormatDateService);
	});

	describe('#format', () => {
		it('should format dates', () => {
			expect(formatDateService.format(new Date('January 9, 1984 00:00:00'))).toBe('9-Jan-1984');
			expect(formatDateService.format(new Date('February 7, 1972 00:00:00'))).toBe('7-Feb-1972');
			expect(formatDateService.format(new Date('March 12, 2031 00:00:00'))).toBe('12-Mar-2031');
			expect(formatDateService.format(new Date('April 24, 2016 00:00:00'))).toBe('24-Apr-2016');
			expect(formatDateService.format(new Date('May 21, 1999 00:00:00'))).toBe('21-May-1999');
			expect(formatDateService.format(new Date('June 6, 2000 00:00:00'))).toBe('6-Jun-2000');
			expect(formatDateService.format(new Date('July 4, 1776 00:00:00'))).toBe('4-Jul-1776');
			expect(formatDateService.format(new Date('August 8, 2015 00:00:00'))).toBe('8-Aug-2015');
			expect(formatDateService.format(new Date('September 30, 1911 00:00:00'))).toBe('30-Sep-1911');
			expect(formatDateService.format(new Date('October 31, 1989 00:00:00'))).toBe('31-Oct-1989');
			expect(formatDateService.format(new Date('November 12, 1980 00:00:00'))).toBe('12-Nov-1980');
			expect(formatDateService.format(new Date('December 25, 1950 00:00:00'))).toBe('25-Dec-1950');
		});
	});
});
