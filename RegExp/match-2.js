// Untuk mengambil semua karakter KECUALI huruf dan angka. RegExp (Regular Expression) untuk melakukan itu adalah : \W
// function panggilRegexp(value) {
//    var ambilData = value.match(/\W/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// Kita akan mencoba untuk mengambil semua karakter dan spasi KECUALI angka
// RegExp (Regular Expression) untuk melakukan itu adalah : \D
// function panggilRegexp(value) {
//    var ambilData = value.match(/\D/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// Kita akan mencoba untuk mengambil karakter KECUALI SPASI
// RegExp (Regular Expression) untuk melakukan itu adalah : \S
function panggilRegexp(value) {
   var ambilData = value.match(/\S/g)
   console.log(ambilData)
}

panggilRegexp("Bulan ke 1 sd ke 4");
