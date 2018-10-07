"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var errorIfNotArray_1 = require("basic-data-handling/errorIfNotArray");


function errorIfValuesAreNotArrays(values) {
	errorIfNotArray_1.errorIfNotArray(values);
	var i = -1;
	while (++i < values.length) {
		errorIfNotArray_1.errorIfNotArray(values[i]);
	}
}


exports.errorIfValuesAreNotArrays = errorIfValuesAreNotArrays;
