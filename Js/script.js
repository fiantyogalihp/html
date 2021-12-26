var x = 10;
console.log('hello world');
console.log('nilai dari variable x adalah ' + x);

alert('selamat datang');
var tryAgain = true;

while (tryAgain) {
  var nama = prompt('masukkan nama anda: ');
  alert('hello ' + nama);
  
  tryAgain = confirm('mw coba lagi??');
  // karena variable try bersifat true, jika try berganti menjadi false, maka pengulangan akan berhenti 
}

alert('terima kasih telah berkunjung!!');