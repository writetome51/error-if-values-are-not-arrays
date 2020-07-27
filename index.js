import {errorIfNotArray} from 'error-if-not-array';


export function errorIfValuesAreNotArrays(values) {
	errorIfNotArray(values);
	var i = -1;
	while (++i < values.length) {
		errorIfNotArray(values[i]);
	}
}
