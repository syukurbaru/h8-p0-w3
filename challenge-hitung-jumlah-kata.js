function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  // var kalimatNew = kalimat.split(" "); // Dipecah kedalam array
  // console.log(kalimatNew);
  // var kalimatPjng = kalimatNew.length; // Menghitung jumlah elelement dlm array

  // Menghitung jumlah kata maka sama saja menghitung jumlah spasi plus 1
  var jmlSpasi = 0 + 1;
  for (var i = 0; i < kalimat.length; i++) {
    if (kalimat[i] === " ") {
      jmlSpasi++;
    }
  }
  return jmlSpasi;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
