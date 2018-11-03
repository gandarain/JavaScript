// Regular Expression atau sering disebut Regexp adalah memiliki sebuah flags atau lebih mudah dalam kita memahaminya kita sebut sebagai “TANDA”,
// dimana flags tersebut nantinya akan memberikan effect / hasil yang berbeda pada setiap pencarian antara yang menggunakan flags dan yang tidak.
function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz";

 console.log(str.search(/K/))
 console.log(str.search(/K/i))
 console.log(str.search(/k/i))
}

panggilRegexp()

// Pencarian pertama : huruf “K” yang dicari tidak ditemukan karena yang dicari adalah huruf “K” besar, sedangkan didalam variable tersebut tidak memiliki hufuf “K” besar.
// Sedangkan pada pencarian kedua dan ketiga : huruf yang dicari ditemukan pada index ke 10. sekalipun kita menuliskannya huruf “K” besar ataupun “k” kecil,
// itu karena kita sudah menambahkan flag “i” yang artinya mengabaikan antara huruf BESAR dan kecil.
