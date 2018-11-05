function panggilRegexp(value) {
 let str = "abcdefghijklmnopqrstuvwxyz-A        B        C        D        E        F        G        H        I        J        K        L        M        N        O        P        Q        R        S        T        U        V        W        X        Y        Z";

 hasil.push(str.match(/c/gi));
 hasil.push(str.match(/k/gi));
 hasil.push(str.match(/l/gi));
 // console.log(str.search(/c/i))
 // console.log(str.match(/c/g))

 return hasil
}

var hasil = [];
console.log(panggilRegexp(hasil))

// var arry = [];
// arry.push([1,2]);
// arry.push([2,3]);
// console.log(arry);
