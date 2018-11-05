function panggilShift() {
  var kota = ['Jakarta', 'Bandung', 'Malang', 'Surabaya', 'Medan']
  console.log(kota);
  console.log("---------------------------------------------------------");

  // kota = kota.shift();
  // shift menghapus atau mengambil data pertama pada array
  var kota2 = kota.shift()
  console.log(kota2);
  return kota
}

console.log(panggilShift())
