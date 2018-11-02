function panggilSplice() {
  var kota = ["Jakarta", "Medan", "Padang", "Malang"]
  console.log(kota);

  //slice untuk input data susai dgn keinginan urutan nya
  // urutan pertama tempat ditambahkan, dan urutan kedua maka array yang berada di urutan tsb akan dihapus semua
  // kota.splice(2,2,'Palembang')
  // kota.splice(2,0,'Palembang')
  // return kota

  // selain untuk input data, splice bisa untuk menghapus juga
  // urutan pertama merupakan array yang akan dihapus dan urutan kedua brp indeks yang di hapus dari urutan pertama
  kota.splice(1,2)
  return kota
}

console.log(panggilSplice());
