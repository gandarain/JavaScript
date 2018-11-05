// function panggilModulus() {
//   var data1 = 10;
//   var data2 = 2;
//
//   // % adalah modulus (sisa bagi)
//   // dlm cth ini data1 dibagi data2 menyisakan berapa
//   return data1 % data2
//
// }
//
// console.log(panggilModulus());


var data1 = [1,2,3,4,5,6,7,8,9,10]
var data2 = [11,12,13,14,15,16,17,18,19,20]

function modulus(data){
  for (var i = 0; i < 10; i++) {
    var hasil1 = data1[i] % 2;
    var tipe1 = []

    if (hasil1 == 0) {
      tipe1 = 'genap'
    }else {
      tipe1 = 'ganjil'
    }
    console.log(tipe1);
  }
}

modulus(data1)
modulus(data2)
