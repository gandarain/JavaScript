function kelipatan5() {
  var bilangan = []
  for (var i = 0; i < 30; i++) {
    if (i%5 === 0) {
      bilangan.push(i)
    }
  }
  return bilangan
}

console.log(kelipatan5());
