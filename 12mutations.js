function mutate(arr) {
	var chkm8 = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();
	for (i = 0; i < chkm8.length; i++) {
		if (target.indexOf(chkm8[i]) === -1) return false;
	}
	return true;
}