
exports.min = function min (array) {
	let m = 0;
	if(array === undefined || array.length == 0) return 0;
	for (let i = 0; i < array.length; i++) {
    if (array[i] < m) {
			m = array[i];
}
} return m;
}

exports.max = function max (array) {
	let m = 0;
	if(array === undefined || array.length == 0) return 0;
for (let i = 0; i < array.length; i++) {
if (array[i] > m) {
m = array[i];
}
} return m;
}

exports.avg = function avg (array) {
	let m = 0, j = 0;
	if(array === undefined || array.length == 0) return j;
	for (let i = 0; i < array.length; i++) {
		m += array[i];
	}
	m /= array.length;
	return m;
}
