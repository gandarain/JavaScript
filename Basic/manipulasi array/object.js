// function panggilObjek() {
//   var mobil = {
//     type: 'Sedan',
//     harga: 2000000,
//     warna: 'Putih',
//     tahun: [2001,2002,2003,2004]
//   }
//
//   console.log(mobil)
//   console.log(mobil.warna)
//   console.log(mobil.tahun[1])
// }
//
// panggilObjek()

var mhs = {
  nama: ['eko', 'ganda', 'rian'],
  nim: [1,2,3],
  nilai: [100,90,90],
  grade: ['A', 'A', 'A']
}

function panggilObjek2(mhs) {
  for (var i = 0; i < 4; i++) {
    console.log("Nama ", mhs.nama[i])
    console.log("Nim ", mhs.nim[i])
    console.log("Nilai ", mhs.nilai[i])
    console.log("Grade ", mhs.grade[i])
  }
}

panggilObjek2(mhs);
