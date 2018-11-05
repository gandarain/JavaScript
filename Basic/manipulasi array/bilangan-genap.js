// function bilanganGenap() {
//   var bilangan = []
//   for (var i = 0; i < 10; i++) {
//     if (i%2 === 0) {
//       bilangan.push(i)
//     }
//   }
//   return bilangan
// }
//
// console.log(bilanganGenap());

var bilangan = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
function modulus(bilangan) {
  var hasil = []
  for (var i = 0; i < bilangan.length; i++) {
    if(bilangan[i] % 2 === 0){
      hasil.push('Genap')
    }else {
      hasil.push('Ganjil')
    }
  }
  return hasil
}

console.log(modulus(bilangan));
