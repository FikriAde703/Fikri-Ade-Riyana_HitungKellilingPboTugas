   // Fungsi untuk menghitung luas dan keliling persegi panjang
   function hitungPersegiPanjang() {
    // Mendapatkan nilai panjang dan lebar dari input
    var panjang = document.getElementById("panjang").value;
    var lebar = document.getElementById("lebar").value;

    // Menghitung luas dan keliling persegi panjang
    var luas = panjang * lebar;
    var keliling = 2 * (panjang + lebar);

    // Menampilkan hasil ke output
    document.getElementById("luasPersegiPanjang").innerHTML = "Luas Persegi Panjang = " + luas + " cm<sup>2</sup>";
    document.getElementById("kelilingPersegiPanjang").innerHTML = "Keliling Persegi Panjang = " + keliling + " cm";
}

// Fungsi untuk menghitung luas dan keliling segitiga
function hitungSegitiga() {
    // Mendapatkan nilai alas, tinggi, dan sisi miring dari input
    var alas = document.getElementById("alas").value;
    var tinggi = document.getElementById("tinggi").value;
    var sisiMiring = document.getElementById("sisiMiring").value;

    // Menghitung luas dan keliling segitiga
    var luas = 0.5 * alas * tinggi;
    var keliling = alas + tinggi + sisiMiring;

    // Menampilkan hasil ke output
    document.getElementById("luasSegitiga").innerHTML = "Luas Segitiga = " + luas + " cm<sup>2</sup>";
    document.getElementById("kelilingSegitiga").innerHTML = "Keliling Segitiga = " + keliling + " cm";
}

// Fungsi untuk menghitung luas dan keliling lingkaran
function hitungLingkaran() {
    // Mendapatkan nilai jari-jari dari input
    var jariJari = document.getElementById("jariJari").value;

    // Menghitung luas dan keliling lingkaran
    var luas = Math.PI * jariJari * jariJari;
    var keliling = 2 * Math.PI * jariJari;

    // Menampilkan hasil ke output
    document.getElementById("luasLingkaran").innerHTML = "Luas Lingkaran = " + luas.toFixed(2) + " cm<sup>2</sup>";
    document.getElementById("kelilingLingkaran").innerHTML = "Keliling Lingkaran = " + keliling.toFixed(2) + " cm";
}