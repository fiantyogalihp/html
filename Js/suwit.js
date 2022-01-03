document.write('\nIni adalah permainan suwit sederhana menggunakan javascript');

// langkah permainan :
// menangkap pilihan player
var p = prompt('Selamat datang di permainan suwit\n tentukan pilihan anda : gajah, semut, atau orang ')

// menangkap pilihan computer

// membangkitkan bilangan random
var comp = Math.random();

if (comp < 0.34) {
  comp = 'gajah';
} else if (comp >= 0.34 && comp <= 0.67) {
  comp = 'orang';
} else {
  comp = 'semut';
}
console.log(comp);

// menentukan rules
var hasil = '';

if (p == comp) {
  hasil = 'SERI!';
} else if (p == 'gajah') {
  hasil = (comp == 'semut') ? 'KALAH!' : 'MENANG!';
} else if (p == 'orang') {
  hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
} else if (p == 'semut') {
  hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
} else {
  hasil = ('pilihan yang anda masukan salahh');
}


// tampilkan hasilnya
if (hasil == 'MENANG!') {
  alert('selamat anda MENANG!');
} else {
  alert('ohh tidak anda KALAH!');
}