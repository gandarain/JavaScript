// Perualangan Biasa
// function panggilPerulangan() {
//  var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//  for (var i = 0; i < dataKota.length; i++) {
//    console.log(dataKota[i]);
//    console.log(i);
//    console.log(dataKota);
//  }
// }

// Perulangan for each
// function panggilPerulangan() {
//  var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
//  dataKota.forEach((item, index, array) => {
//    console.log(item);
//    console.log(index);
//    console.log(array);
//  });
// }

// Perulangan Map
function panggilPerulangan() {
 var dataKota = ['Jakarta', 'Balikpapan', 'Medan'];
 dataKota.map((item,index,array) => {
   console.log(item);
   console.log(index);
   console.log(array);
 });
}

panggilPerulangan();
