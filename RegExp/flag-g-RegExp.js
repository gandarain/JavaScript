// Kita akan mencoba melakukan PENCOCOKAN data pada sebuah variable string, di dalam Regexp untuk melakukan PENCOCOKAN adalah menggunakan perintah match()
// Di dalamnya kita akan memasukkan flag “g”, dimana flag “g” ini sendiri berfungsi sifatnya GLOBAL
// yaitu untuk melakukan pencarian data yang sama di semua data STRING yang dijadikan acuan kita untuk mencocokan data tersebut

// function panggilRegexp() {
//  let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";
//
//  console.log(str.match(/c/g))
// }
//
// panggilRegexp()


// Sekarang kita bisa membandingkannya dengan menghilangkan flag “g” didalamnya, seperti dibawah ini
// Maka ketika function tersebut dijalankan hanya akan berhenti ketika keyword yang dicari sudah ketemu.
function panggilRegexp() {
 let str = "abcdefghijklmnopqrstuvwxyz-abcdefghijklmnopqrstuvwxyz";

 console.log(str.match(/c/))
}

panggilRegexp()
