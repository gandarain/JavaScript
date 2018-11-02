function panggilNestedArray(value){
  var hasil = []

  for ( i=0; i<value.length+1; i++ ){
    hasil.push([value[0][i], value[1][i], value[2][i]])
  }
  return hasil
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(panggilNestedArray(nestedArray))
