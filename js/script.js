// Menambahkan event listener untuk form dengan id "bmiForm" saat disubmit
document.getElementById("bmiForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Menghentikan perilaku bawaan submit form

  // Mengambil nilai input dari elemen form
  const beratBadan = document.getElementById("berat-badan").value;
  const usia = document.getElementById("usia").value;
  const tinggiBadan = document.getElementById("tinggi-badan").value;

  // Regex untuk validasi input angka
  const numberRegex1 = /^[1-9][0-9]*$/; // Untuk berat badan dan tinggi badan
  const numberRegex2 = /^[1-9][0-9]{0,2}$/; // Untuk usia

  // Validasi input menggunakan regex
  if (!numberRegex1.test(beratBadan)) {
    alert("Masukkan nilai yang valid untuk berat badan!");
    return;
  }
  if (!numberRegex2.test(usia)) {
    alert("Masukkan nilai yang valid untuk usia!");
    return;
  }
  if (!numberRegex1.test(tinggiBadan)) {
    alert("Masukkan nilai yang valid untuk tinggi badan!");
    return;
  }

  // Mengubah nilai input menjadi float untuk perhitungan BMI
  const beratBadanFloat = parseFloat(beratBadan);
  const tinggiBadanFloat = parseFloat(tinggiBadan) / 100;

  // Menghitung BMI
  if (tinggiBadanFloat > 0) {
    const bmi = (
      beratBadanFloat /
      (tinggiBadanFloat * tinggiBadanFloat)
    ).toFixed(1);
    let category;
    let range;
    let explanation;

    // Menentukan kategori BMI berdasarkan nilai
    if (bmi < 18.5) {
      category = "Kekurangan Berat Badan";
      range = `Hasil BMI kurang dari 18,5`;
      explanation = `Anda berada dalam kategori kurang berat badan.`;
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      category = "Normal (ideal)";
      range = `Hasil BMI diantara 18,5 - 24,9`;
      explanation = `Anda berada dalam kategori berat badan normal.`;
    } else if (bmi >= 25 && bmi <= 29.9) {
      category = "Kelebihan berat badan";
      range = `Hasil BMI diantara 25 - 29.9`;
      explanation = `Anda berada dalam kategori berat badan berlebih.`;
    } else {
      category = "Kegemukan (obesitas)";
      range = `Hasil BMI 30 atau lebih`;
      explanation = `Anda berada dalam kategori obesitas.`;
    }

    // Menampilkan hasil BMI dan kategori di halaman
    document.getElementById("displayresult").innerHTML = `
        <p>BMI Anda adalah:</p>
        <p>${bmi}</p>
        <p>Kategori: ${category}</p>
      `;

    // Menampilkan range BMI dan penjelasan di halaman
    document.querySelector(".explanation-result").innerHTML = `
        <p>${range}</p>
        <p>${explanation}</p>
      `;

    // Menghapus kelas "hidden" untuk menampilkan hasil
    document.querySelector(".page-right").classList.remove("hidden");
  } else {
    alert("Masukkan berat dan tinggi badan yang valid!");
  }
});
