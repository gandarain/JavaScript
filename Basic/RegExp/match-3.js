// Kita akan mencoba untuk mengambil sebuah kata, dalam contoh kali ini kita akan mencoba mengambil kata “ke” pada sebuah variable string.
// Untuk mengambil kata “ke”. RegExp (Regular Expression) untuk melakukan itu adalah : /ke/g
// Jika teman-teman ingin mencoba menggunakan kata yang berbeda, contoh ingin mengambil kata “Bulan”, maka cukup menuliskannya seperti ini : /Bulan/g

// function panggilRegexp(value) {
//  var ambilData = value.match(/ke/g);
//  console.log(ambilData);
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// Kita akan mencoba untuk mengambil semua “k” dan karakter “e” pada sebuah variable string
// RegExp (Regular Expression) untuk melakukan itu adalah : [ke]
// Jika teman-teman ingin mencoba untuk mengambil huruf lagi,
// contoh bukan hanya huruf “k” dan “e” tapi juga huruf “a” dan “B” teman teman bisa menuliskannya seperti ini : [keaB]
// function panggilRegexp(value) {
//    var ambilData = value.match(/[ke]/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// Kita akan mencoba untuk mengambil karakter KECUALI karakter tertentu, dalam contoh kita ingin mengambil semua karakter KECUALI karakter “k” dan “e”
// RegExp (Regular Expression) untuk melakukan itu adalah : [^ke]
// function panggilRegexp(value) {
//    var ambilData = value.match(/[^ke]/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// Kita akan mencoba untuk mengambil karakter ANTARA karakter tertentu, dalam contoh kita ingin mengambil semua karakter ANTARA karakter “a” sampai “i”
// RegExp (Regular Expression) untuk melakukan itu adalah : [a-i]
function panggilRegexp(value) {
   var ambilData = value.match(/[a-i]/g)
   console.log(ambilData)
}

panggilRegexp("Bulan ke 1 sd ke 4");
