function panggilNestedArray(value){
  var hasil = [[""]]

  for ( i=0; i<value.length+1; i++ )
  {
    for ( j=0; j<value.length; j++ )
    {
      hasil[i] += value[j]
    }
  }
  return hasil
}

var nestedArray = [
   [1,2,3,4],
   ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
   ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

console.log(panggilNestedArray(nestedArray))
