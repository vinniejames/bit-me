var bitcoin = require('bitcoinjs-lib');
n = 0;
while (n < 10) {
	n++;
	
	key = bitcoin.ECKey.makeRandom();
	
	vanity = key.pub.getAddress().toString();
	privateKey = key.toWIF();


	if( vanity.match(/1/i) ){
	//if( vanity.match(/^1vin|^1vince/i) ){
	//if( vanity.match("vince") ){
		console.log('sweet');
		console.log( vanity );
		console.log( privateKey );
	}else if(n % 1 === 0){
		console.log('dude'+n);
	}else{
		//console.log('dude');
	};

};
console.log('done');