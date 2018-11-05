// Kita akan mencoba melakukan PENCOCOKAN data pada sebuah variable string, di dalam Regexp untuk melakukan PENCOCOKAN adalah menggunakan perintah test() 
// dimana hasil yang dikeluarkan adalah Boolean yaitu true / false.

function panggilRegexp() {
 let data = "Belajar Satu Tahun Bersama Niomic";

 console.log(/Satu/.test(data))
}

panggilRegexp()
