function bilanganGanjil() {
  var bilangan = []
  for (var i = 0; i < 30; i++) {
    if (i%2 === 1) {
      bilangan.push(i)
    }
  }
  return bilangan
}

console.log(bilanganGanjil());
