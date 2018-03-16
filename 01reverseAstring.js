function reverseString(str) {
	var strArray = str.split("");
	strArray.reverse();
	var reversedStr = strArray.join("");
	console.log(reversedStr);
	return reversedStr;
}
reverseString("hello");