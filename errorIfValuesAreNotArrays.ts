import { errorIfNotArray } from 'basic-data-handling/errorIfNotArray';


export function errorIfValuesAreNotArrays(values: any[]): void {
	errorIfNotArray(values);
	let i = -1;
	while (++i < values.length) {
		errorIfNotArray(values[i]);
	}
}
