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

var jmlAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot no. ' + noAngkot + 'beroperasi dengan baik');
  noAngkot++;
}

for (let noAngkot = 7; noAngkot <= 10; noAngkot++) {
  console.log('Angkot no. ' + noAngkot + 'tidak beroperasi')
}