// Semua karakter berupa angka dan huruf akan terambil semua, kecuali spasi. RegExp (Regular Expression) untuk melakukan itu adalah : \w
// function panggilRegexp(value) {
//    var ambilData = value.match(/\w/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// RegExp (Regular Expression) untuk melakukan itu adalah : \d
// function panggilRegexp(value) {
//    var ambilData = value.match(/\d/g)
//    console.log(ambilData)
// }
//
// panggilRegexp("Bulan ke 1 sd ke 4");

// RegExp (Regular Expression) untuk melakukan itu adalah : \s
function panggilRegexp(value) {
   var ambilData = value.match(/\s/g)
   console.log(ambilData)
   console.log("Banyaknya Spasi : ",ambilData.length)
}

panggilRegexp("Bulan ke 1 sd ke 4");
