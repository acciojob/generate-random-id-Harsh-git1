function makeid(l) {
  // write your code here
	function generateRandom() {
		return parseInt(Math.random() * 100);
	}

	let ans = "";
	for(let i=0; i<l; i++){
		let charCode = generateRandom();
    
		if((48 <= charCode &&  charCode <= 57) || (65 <= charCode && charCode <= 90) || (97 <= charCode && charCode <=99)) {
			
      ans += String.fromCharCode(charCode);
		}else {
      
			ans += String.fromCharCode((99 + (charCode % 23)));		
		}
	}
 
	return ans;
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));  
