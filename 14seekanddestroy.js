function destroyer(arr) {
	var spartargs = Array.prototype.slice.call(arguments);
	for (var X = 0; X < arr.length; X++) {
		for (var Y = 0; Y < spartargs.length; Y++) {
			if (arr[X] === spartargs[Y]) {
				delete arr[X]; //If then function for duplicate value and type removal
			}
		}
	}
	return arr.filter(Boolean);
}