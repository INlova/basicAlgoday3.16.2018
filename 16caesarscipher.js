function rot13(str) {
	var decoded = "";
	for (var i in str) {
		if (str.charCodeAt(i) < 65 || str.charCodeAt(i) > 91) {
			decoded += str[i];
			continue;
		}
		if (str.charCodeAt(i) < 78) {
			decoded += String.fromCharCode(str.charCodeAt(i) + 13);
		} else {
			decoded += String.fromCharCode(str.charCodeAt(i) - 13);
		}
	}
	return decoded;
}
rot13("HELLO MATE");