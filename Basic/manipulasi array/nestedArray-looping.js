
// function panggilNestedArray(value){
//   for (var i = 0; i < value.length; i++) {
//     console.log("ID =", value[i][0])
//     console.log("Nama =", value[i][1])
//     console.log("Company = ", value[i][2])
//     console.log("");
//   }
// }

function panggilNestedArray(value){
  for (var i=0, len=nestedArray.length; i<len; i++) {
    for (var j=0, len2=nestedArray[i].length; j<len2; j++) {
        console.log( nestedArray[i][j] );
    }
  }
}

var nestedArray = [
  [1, "Mark Zuckerberg", "Facebook"],
  [2, "Elon Musk", "Tesla"],
  [3, "Bill Gates", "Microsoft"],
  [4, "Steve Jobs", "Apple"]
]

panggilNestedArray(nestedArray)
