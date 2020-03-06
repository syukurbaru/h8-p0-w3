function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var kalimatNew = kalimat.split(" "); // Dipecah kedalam array
  var kalimatPjng = kalimatNew.length; // Menghitung jumlah elelement dlm array

  return kalimatPjng;
}

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
