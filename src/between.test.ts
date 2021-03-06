import { ZERO } from './lib/units';
import { between } from './between';

describe('between()', () => {
	test('calculates durations between dates', () => {
		// TODO: Is this a valid ISO date string?
		expect(between(0, '1970-01-01Z')).toEqual(ZERO);
		expect(between('2018-01-02Z', '2018-01-02Z')).toEqual(ZERO);
		expect(between('2018-01-02Z', '2019-03-05Z')).toEqual({
			...ZERO,
			years: 1,
			months: 2,
			days: 3,
		});
		expect(between(new Date('2018-01-01Z'), '2018-01-01T10:22:03.920Z')).toEqual({
			...ZERO,
			hours: 10,
			minutes: 22,
			seconds: 3,
			milliseconds: 920,
		});
	});
});
