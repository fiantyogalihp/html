var x = 10;
console.log('hello world');
console.log('nilai dari variable x adalah ' + x);

var lanjutan = confirm('selamat datang\n tekan "cancel" tour singkat\n tekan "OK" tour panjang');
if (lanjutan === true) {
  var tryAgain = true;
  while (tryAgain) {
    var nama = prompt('masukkan nama anda: ');
    alert('hello ' + nama);

    tryAgain = confirm('mw coba lagi??');
    // karena variable try bersifat true, jika try berganti menjadi false, maka pengulangan akan berhenti 

    alert('terima kasih telah berkunjung!!');
  }
}

var jmlAngkot = 10;
angkotBeroperasi = 6;
noAngkot = 1;

// penggunaan perulangan dengan iterasi IF ELSE
for (let noAngkot = 1; noAngkot <= 10; noAngkot++) {
  if (noAngkot <= 6) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
  } else {
    console.log('Angkot no. ' + noAngkot + ' tidak beroperasi');
  }
}