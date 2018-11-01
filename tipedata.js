function tipeData() {
  var data = '2'
  var data2 = 2;
  console.log(typeof(data2));

  // == tidak peduli tipe data, === peduli tipe data (spesifik)
  if(data2 === 2){
    return 'sukses';
  }else{
    return 'gagal'
  }
}

console.log(tipeData());
