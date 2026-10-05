// DATA SEMENTARA
// Nanti akan diganti dengan data dari server BMKG

const dataGempa = {

    magnitude: "4.8",

    lokasi: "Jawa Barat",

    kedalaman: "10 Km",

    waktu: "05 Oktober 2026, 10:30 WIB",

    potensi: "Tidak berpotensi tsunami"

};


// Menampilkan data gempa

document.getElementById("magnitude")
    .textContent = dataGempa.magnitude;


document.getElementById("lokasi")
    .textContent = dataGempa.lokasi;


document.getElementById("kedalaman")
    .textContent = dataGempa.kedalaman;


document.getElementById("waktu")
    .textContent = dataGempa.waktu;


document.getElementById("potensi")
    .textContent = dataGempa.potensi;



// Tombol lihat gempa

function lihatGempa() {

    document
        .getElementById("gempa")
        .scrollIntoView({
            behavior: "smooth"
        });

}