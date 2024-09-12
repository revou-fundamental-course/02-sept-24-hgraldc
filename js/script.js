function hitungLuas() {
    const alas = document.getElementById('panjang-alas-luas').value;
    const tinggi = document.getElementById('tinggi-luas').value;

    if (!alas || !tinggi) {
        alert('Harap isi semua input untuk menghitung luas segitiga.');
        return;
    }

    const hasil = 0.5 * alas * tinggi;

    document.getElementById('hasil-luas').textContent = `Hasil Perhitungan: ${hasil}`;
}

function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('sisi1').value);
    const sisi2 = parseFloat(document.getElementById('sisi2').value);
    const sisi3 = parseFloat(document.getElementById('sisi3').value);

    if (isNaN(sisi1) || isNaN(sisi2) || isNaN(sisi3)) {
        alert('Harap isi semua input untuk menghitung keliling segitiga.');
        return;
    }

    const hasil = sisi1 + sisi2 + sisi3;

    document.getElementById('hasil-keliling').textContent = `Hasil Perhitungan: ${hasil}`;
}