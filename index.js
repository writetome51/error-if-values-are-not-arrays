import {errorIfNotArray} from 'error-if-not-array';


export function errorIfValuesAreNotArrays(values) {
	let i = -1, length = values.length;
	while (++i < length) errorIfNotArray(values[i]);
}
