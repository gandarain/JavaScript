function panggilPop() {
  var kota = ['Jakarta', 'Bandung', 'Medan', 'Makassar']
  console.log(kota);
  console.log("---------------------------------------------");

  // pop menghapus data array yang terakhir
  kota.pop()
  return kota
}

console.log(panggilPop())
