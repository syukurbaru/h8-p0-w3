//contoh input
var input = [
  "0001",
  "Roman Alamsyah",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca"
];

// output ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]

function dataHandling2(prm) {
  prm.splice(1, 2, "Roman Alamsyah Elsharawi", "Provinsi Bandar Lampung");
  prm.splice(4, 1, "Pria", "SMA Internasional Metro");
  console.log(prm);

  // Dipecah terus diswitch agar untuk mengubah angka jadi bulan kalimat
  var pecBulan = prm[3].split("/");
  switch (pecBulan[1]) {
    case 01: {
      pecBulan[1] = "Januari";
      break;
    }
    case 02: {
      pecBulan[1] = "Februari";
      break;
    }
    case 03: {
      pecBulan[1] = "Maret";
      break;
    }
    case 04: {
      pecBulan[1] = "April";
      break;
    }
    case "05": {
      pecBulan[1] = "Mei";
      break;
    }
    case 06: {
      pecBulan[1] = "Juni";
      break;
    }
    case 07: {
      pecBulan[1] = "Juli";
      break;
    }
    case 08: {
      pecBulan[1] = "Agustus";
      break;
    }
    case 09: {
      pecBulan[1] = "September";
      break;
    }
    case 10: {
      pecBulan[1] = "Oktober";
      break;
    }
    case 11: {
      pecBulan[1] = "Nopember";
      break;
    }
    case 11: {
      pecBulan[1] = "Desember";
      break;
    }
  }

  console.log(pecBulan[1]);

  // Dipecah lalu disortir descenden

  var bulan = prm[3].split("/");
  // console.log(bulan);
  var isi = [];
  for (var i = 0; i < bulan.length; i++) {
    isi.push(Number(bulan[i]));
  }
  // console.log(isi);

  // Membuat fungsi sortir

  function sortDesc(isiArr) {
    var count = 0;
    while (count < isiArr.length - 1) {
      count = 0;
      for (var i = 0; i < isiArr.length - 1; i++) {
        var simpan = isiArr[i];
        if (isiArr[i] < isiArr[i + 1]) {
          isiArr[i] = isiArr[i + 1];
          isiArr[i + 1] = simpan;
        } else count += 1;
      }
    }
    return isiArr;
  }

  sortDesc(isi);

  // Hasil dari sortir dikembalikan Menjadi string
  var strIsi = [];
  for (var j = 0; j < isi.length; j++) {
    if (isi[j] < 10) {
      strIsi.push("0" + String(isi[j]));
    } else strIsi.push(String(isi[j]));
  }
  console.log(strIsi);

  // Melakukan Join

  var joinBulan = bulan.join("-");
  console.log(joinBulan);

  // Memotong Element 2 dan tampilkan
  var sliceNama = prm[1].slice(0, 14);
  console.log(sliceNama);

  //   console.log(pecBulan);
}

dataHandling2(input);
/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah
 */
