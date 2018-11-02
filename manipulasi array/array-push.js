// function arrayPush() {
//   var data = [1,2,3,4,5,6,4,3,4,3];
//   console.log(data);
//   console.log("-------------------------------------")
//
//   // push untuk menginput data di bagian array terakhir
//   // data.push(9)
//   data.push("Jakarta")
//   return data
// }

// console.log(arrayPush());

var data = []
function addData(data){
  for (var i = 0; i < 10; i++) {
    data.push(i);
  }
}
addData(data);
console.log(data);
