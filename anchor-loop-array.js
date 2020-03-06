//contoh input
var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
];

function dataHandling(paramater) {
  for (var i = 0; i < paramater.length; i++) {
    console.log("Nomor ID: " + paramater[i][0]);
    console.log("Nama Lengkap: " + paramater[i][1]);
    console.log(
      "Tempat Tanggal Lahir: " + paramater[i][2] + " " + paramater[i][3]
    );
    console.log("Hobi: " + paramater[i][4] + "\n");
  }
}
dataHandling(input);
