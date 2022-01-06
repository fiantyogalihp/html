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

// penggunaan perulangan dengan iterasi IF ELSE
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 5) {
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik');
  } else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) {
    console.log('Angkot no. ' + noAngkot + ' sedang lembur');
  } else {
    console.log('Angkot no. ' + noAngkot + ' tidak beroperasi');
  }
}

console.log('penggunaan switch \n');

// penggunaan switch pada js 
var makanan = prompt('silahkan memasukan makanan anda :\n menu : hamburger, nasi, telur, susu, pizza');
// prompt adalah ekspresi, yang disimpan dalam variable agar bisa digunakan berkali-kali
switch (makanan) {
  // parameter switch adalah ekspresi bukan kondisi, ekspresi pada dasarnya menggasilkan sebuah nilai(value) 
  case 'nasi':
  case 'susu':
  case 'telur':
  // case berisi sebuah value yang dihasilkan dari ekspresi, dan diakhiri titik dua
  //jika kalian ingin menggunakan switch, pastikan mengetahui type data value yang akan dihasilkan ekspresi,
  //karena jika type data value case tidak sama dengan type data value ekspresi, maka akan error
  //seperti contoh diatas typr data value dari ekspresi prompt adalah String, maka type data value pada case juga harus String
  case 'pizza':
  case 'hamburger':
    alert('makanan TIDAK SEHAT!')
    break;
  // dua case diatas adalah ringkasan dari satu case yang berisi output jika menghasilkan nilai tersebut
  // ex :
  // case pizza:
  //   alert('makanan TIDAK SEHAT!')
  //   break;
  // case hamburger:
  //   alert('makanan TIDAK SEHAT!')
  //   break;

  default:
    alert('makanan tidak ada dalam daftar!')
    break;
}

var y = 5;
while (x < 5) {
  console.log('hello world');
  x++;
}

do {
  console.log('hellow world');
  x++;
} while (x < 5);
//perbedaan while dan d while adalah 
// jika while, akan melakukan eksekusi terlebih dahulu ,setelah itu melakukan perulangan
// jika do while, akan melakukan perulangan terlebih dahulu, setelah itu melakukan eksekusi
// perbedaan paling mencolok antara keduanya adalah jika suatu variable dalam while pada peng-eksekusian pertama false maka, tidak ada perulangan yang akan muncul
// beda dengan do while, jika suatu variable dalam do while pada peng-eksekusian pertama false, maka akan tetap dilanjutkan setelah itu menampilkan keadaan false


console.log('\npengkodisian for iterasi ');

var s = '';
for (var b = 0; b <= 10; b++) {
  for (var j = 0; j < b; j++) {
    s += 'x'
  }
  s += '\n';
}
console.log(s); 