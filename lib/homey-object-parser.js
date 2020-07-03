module.exports = (obj) => {
    var arr = [];

	for (const o in obj) {
		arr.push(JSON.parse(JSON.stringify(obj[o], null, 4)));
	}

	return arr;
}