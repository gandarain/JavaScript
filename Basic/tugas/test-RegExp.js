function panggilRegexp(value) {
   var nilai = /css/.test(value)
   if (nilai === true) {
     console.log(value);
   }
   var nilai = /html/.test(value)
   if (nilai === true) {
     console.log(value);
   }

   var nilai = /javascript/.test(value)
   if (nilai === true) {
     console.log(value);
   }

   var nilai = /php/.test(value)
   if (nilai === true) {
     console.log(value);
   }
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");
panggilRegexp("Belajar php");
