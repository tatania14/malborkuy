document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav ul li a");
  const menuBtn = document.querySelector(".menu-btn");
  const navList = document.querySelector("nav ul");
  
 // Tambahkan event listener untuk tombol menu
 menuBtn.addEventListener("click", function () {
  navList.classList.toggle("show");
});

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();

      const targetId = navLink.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      targetElement.scrollIntoView({ behavior: "smooth" });

      // Sembunyikan daftar menu setelah diklik (hanya untuk layar kecil)
      if (window.innerWidth <= 600) {
        navList.classList.remove("show");
      }
    });
  });

  //untuk change tab
      // Mengambil semua tombol tab dan konten tab
      const tabButtons = document.querySelectorAll('.tab-button');
      const tabContents = document.querySelectorAll('.tab-content');
  
      // Menambahkan event listener ke setiap tombol tab
      tabButtons.forEach(button => {
        button.addEventListener('click', () => {
          // Hapus aktif dari semua
          tabButtons.forEach(btn => btn.classList.remove('active'));
          tabContents.forEach(content => content.classList.remove('active'));
      
          // Tambahkan aktif ke yang diklik
          const tabId = button.dataset.tabId;
          document.getElementById(tabId).classList.add('active');
          button.classList.add('active');
        });
      });

      
// Inisialisasi peta Leaflet dengan id "map"
var map = L.map("map").setView([-7.795420327475093, 110.36529818168928], 15);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

// Informasi marker untuk setiap kategori
var markers = {
  Kategori1: [
    {
      coordinates: [-7.791858525493933, 110.3661183767722],
      popupText: "Masjid Malioboro DPRD<br> Lokasi : Dekat DPRD Daerah Istimewa Yogyakarta</br>",
      popupImage: "data/m5.jpeg", // Path gambar untuk popup
      icon: "gambar/masjid.png",
    },
    {
      coordinates: [-7.799214980176262, 110.3655352569469],
      popupText: "Musholla Al-Mizzan<br> Lokasi : Dekat Pasar Beringharjo</br>",
      popupImage: "data/m3.png", // Path gambar untuk popup
      icon: "gambar/masjid.png",
    },
    {
      coordinates: [-7.798398540925357, 110.36495127249883],
      popupText: "Masjid Siti Djirzanah<br> Lokasi : Dekat Teras Malioboro 1</br>",
      popupImage: "data/m4.jpeg", // Path gambar untuk popup
      icon: "gambar/masjid.png",
    },
    {
      coordinates: [-7.794101837929923, 110.36602227331629],
      popupText: "Masjid Sholihin Sosrokusuman<br> Lokasi : Dekat Plaza Mall Malioboro</br>",
      popupImage: "data/m1.png", // Path gambar untuk popup
      icon: "gambar/masjid.png",
    },
    {
      coordinates: [-7.798816706724834, 110.36651955769227],
      popupText: "Mushola Al Barokah<br> Lokasi : Lantai 2 Pasar Beringharjo</br>",
      popupImage: "data/m2.png", // Path gambar untuk popup
      icon: "gambar/masjid.png",
    },
    // Tambahkan marker lainnya untuk Kategori1
  ],
  Kategori2: [
    {
      coordinates: [-7.790819576053609, 110.36615041201658],
      popupText: "Halte Malioboro 1<br> Lokasi : Dekat Hotel Grand Inna Malioboro</br>",
      popupImage: "data/h1.jpeg",
      icon: "gambar/halte.png",
    },
    {
      coordinates: [-7.795207053843893, 110.365581133423],
      popupText: "Halte Malioboro 2<br> Lokasi : Dekat Hotel Mutiara</br>",
      popupImage: "data/h2.jpeg",
      icon: "gambar/halte.png",
    },
    {
      coordinates: [-7.799884960767783, 110.36497743789604],
      popupText: "Halte Malioboro 3<br> Lokasi : Dekat Museum Benteng Vredeburg</br>",
      popupImage: "data/h3.jpeg",
      icon: "gambar/halte.png",
    },
    // Tambahkan marker lainnya untuk Kategori2
  ],
  Kategori3: [
    {
      coordinates: [-7.790030666379261, 110.36613552274352],
      popupText: "Plang Jalan Malioboro<br> Lokasi :Dekat Bank BPD DIY</br>",
      popupImage: "data/i4.jpg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.791261843632547, 110.36610800269446],
      popupText: "Ruang Informasi Teras Malioboro 2<br> Lokasi : Di Area Depan Teras Malioboro 2</br>",
      popupImage: "data/o8.jpeg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.79530738544303, 110.36573198032987],
      popupText: "Government Tourist Information Centre (TIC)<br> Lokasi : Dekat Halte Maliooro 2</br>",
      popupImage: "data/o9.jpg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.7958359580821055, 110.36568970198894],
      popupText: "Area Foto Pokoke Blangkon<br> Lokasi : Area Pintu Barat Kepatihan</br>",
      popupImage: "data/i2.jpeg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.800194560556365, 110.36479478065355],
      popupText: "Sekretariat Negara Istana Kepresidenan<br> Lokasi : Bersebrangan dengan Museum Vredeburg</br>",
      popupImage: "data/i1.jpeg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.801104084024619, 110.3646189202499],
      popupText: "Monumen Batik Yogyakarta<br> Lokasi : Area Titik Nol Yogyakarta</br>",
      popupImage: "data/v1.jpeg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.801103792504314, 110.36506770671362],
      popupText: "Monumen Serangan Umum 1 Maret 1949<br> Lokasi : Dekat Museum Benteng Vredebur</br>",
      popupImage: "data/v3.jpeg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.801365313971268, 110.36473886668657],
      popupText: "Titik Nol Yogyakarta<br> Lokasi : Dekat Bank BNI Trikora</br>",
      popupImage: "data/i3.jpg",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.799553768942362, 110.36489123485173],
      popupText: "Monumen Ngejaman Malioboro<br> Lokasi : Dekat Pasar Sore Malioboro</br>",
      popupImage: "data/v2.png",
      icon: "gambar/info.png",
    },
    {
      coordinates: [-7.7963094283159196, 110.36530636378635],
      popupText: "Plang Jalan Malioboro<br> Lokasi : Dekat Kampung Wisata Pajeksan</br>",
      popupImage: "data/i4.jpg",
      icon: "gambar/info.png",
    },
    // Tambahkan marker lainnya untuk Kategori3
  ],
  Kategori4: [
    {
      coordinates: [-7.791763397210249, 110.36602575033162],
      popupText: "Toilet Umum Malioboro<br> Lokasi : Dekat Masjid DPRD Malioboro</br>",
      popupImage: "data/t4.jpeg",
      icon: "gambar/toilet.png",
    },
    {
      coordinates: [-7.795126538052986, 110.36568089328972],
      popupText: "Toilat Umum Malioboro<br> Lokasi : Dekat Halte Malioboro 2</br>",
      popupImage: "data/t2.jpg",
      icon: "gambar/toilet.png",
    },
    {
      coordinates: [-7.795126538052986, 110.36568089328972],
      popupText: "Toilat Umum<br> Lokasi : Dekat Tempat Parkir Suratmajan</br>",
      popupImage: "data/t1.png",
      icon: "gambar/toilet.png",
    },
    {
      coordinates: [-7.799240419413127, 110.36562174158708],
      popupText: "Toilet Pasar Beringharjo<br> Lokasi : Dekat Musholla Al-Mizzan</br>",
      popupImage: "data/t3.png",
      icon: "gambar/toilet.png",
    },
    {
      coordinates: [-7.789890977647711, 110.36647996714251],
      popupText: "Toilet Stasiun Tugu<br> Lokasi : Dekat Stasiun Tugu</br>",
      popupImage: "data/t5.png",
      icon: "gambar/toilet.png",
    },
    // Tambahkan marker lainnya untuk Kategori4
  ],
  Kategori5: [
    {
      coordinates: [-7.792669154963257, 110.36606226667274],
      popupText: "Tempat Parkir<br> Lokasi : Dekat Mall Malioboro</br>",
      popupImage: "data/p7.jpeg",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.7963685029667475, 110.365652081873],
      popupText: "Tempat Parkir<br> Lokasi : Dekat Mirota Gallery di jalan Suryatmajan</br>",
      popupImage: "data/p1.png",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.7974958683844315, 110.36586163589905],
      popupText: "Tempat Parkir<br> Lokasi : Dekat Ramayana Mall</br>",
      popupImage: "data/p6.png",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.797288160637908, 110.36429766026276],
      popupText: "Tempat Parkir Ramai Mall<br> Lokasi : Dekat Ramai Mall di Jalan Beskalan</br>",
      popupImage: "data/p2.png",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.799091009098414, 110.36527134355825],
      popupText: "Tempat Parkir Motor<br> Lokasi : Depan Pintu B1 Pasar Beringharjo</br>",
      popupImage: "data/p3.png",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.79924450657871, 110.36638020003657],
      popupText: "Tempat Parkir<br> Lokasi : Dekat Pasar Pasar Beringharjo</br>",
      popupImage: "data/p5.png",
      icon: "gambar/parkir.png",
    },
    {
      coordinates: [-7.799518404660357, 110.36482650042873],
      popupText: "Tempat Parkir Motor<br> Lokasi : Dekat GPIB Marga Mulya Yogyakarta</br>",
      popupImage: "data/p4.png",
      icon: "gambar/parkir.png",
    },
    // Tambahkan marker lainnya untuk Kategori5
  ],
  Kategori6: [
    {
      coordinates: [-7.791516958585111, 110.36610464993105],
      popupText: "Teras Malioboro 2<br> Lokasi : Jl. Malioboro No.56, Suryatmajan</br>",
      popupImage: "data/o7.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.798701612363085, 110.36522560612329],
      popupText: "Pasar Beringharjo<br> Lokasi : Jl. Margo Mulyo No.16, Ngupasan</br>",
      popupImage: "data/o4.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.800152042292207, 110.36503617945526],
      popupText: "Museum Benteng Vredeburg<br> Lokasi : Jl. Margo Mulyo No.6, Ngupasan</br>",
      popupImage: "data/o2.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.800558705145134, 110.36509795103187],
      popupText: "Taman Vredeburg<br> Lokasi : Area Museum Benteng Vredeburg</br>",
      popupImage: "data/o1.png",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.798856758489079, 110.36497723093049],
      popupText: "Teras Malioboro 1<br> Lokasi : Jl. Margo Mulyo No.112, Ngupasan</br>",
      popupImage: "data/o5.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.799349233435164, 110.36518489328573],
      popupText: "Pasar Sore Malioboro<br> Lokasi : Dekat Museum Benteng Vredeburg</br>",
      popupImage: "data/o3.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    {
      coordinates: [-7.7907308450207315, 110.36593089020678],
      popupText: "Jogja Library Center<br> Lokasi : Dekat Plang Malioboro</br>",
      popupImage: "data/o6.jpeg",
      icon: "gambar/Desain tanpa judul.png",
    },
    // Tambahkan marker lainnya untuk Kategori6
  ],
  Kategori7: [
    {
      coordinates: [-7.797060970253906, 110.36386946508843],
      popupText: "Gereja Kristen Kalam Kudus<br> Lokasi : Dekat Ramai Mall</br>",
      popupImage: "data/g1.png",
      icon: "gambar/gereja.png",
    },
    {
      coordinates: [-7.799288883494818, 110.36462558570008],
      popupText: "GPIB Marga Mulya Yogyakarta<br> Lokasi : Dekat Pasar Sore Malioboro</br>",
      popupImage: "data/g2.png",
      icon: "gambar/gereja.png",
    },
    // Tambahkan marker lainnya untuk Kategori2
  ],
  // Tambahkan kategori lainnya jika diperlukan
};

// Buat objek layer untuk setiap kategori
var layerKategori1 = L.layerGroup();
var layerKategori2 = L.layerGroup();
var layerKategori3 = L.layerGroup();
var layerKategori4 = L.layerGroup();
var layerKategori5 = L.layerGroup();
var layerKategori6 = L.layerGroup();
var layerKategori7 = L.layerGroup();

// Tambahkan marker dari setiap kategori ke objek layer yang sesuai
for (var category in markers) {
  markers[category].forEach(function (markerInfo) {
    var customIcon = L.icon({
      iconUrl: markerInfo.icon,
      iconSize: [30, 30],
      iconAnchor: [16, 32],
      popupAnchor: [0, -32],
    });

    var marker = L.marker(markerInfo.coordinates, { icon: customIcon });

    // Menggunakan Leaflet.Popup.Image untuk menampilkan gambar di dalam popup
    marker.bindPopup(`
    <img src="${markerInfo.popupImage}" width="200px" /><br>
      ${markerInfo.popupText}<br>
      <a href="https://www.google.com/maps?q=${markerInfo.coordinates[0]},${markerInfo.coordinates[1]}" target="_blank">Lihat di Google Maps</a>
    `);

    // Tambahkan marker ke objek layer yang sesuai
    if (category === 'Kategori1') {
      layerKategori1.addLayer(marker);
    } else if (category === 'Kategori2') {
      layerKategori2.addLayer(marker);
    } else if (category === 'Kategori3') {
      layerKategori3.addLayer(marker);
    } else if (category === 'Kategori4') {
      layerKategori4.addLayer(marker);
    } else if (category === 'Kategori5') {
      layerKategori5.addLayer(marker);
    } else if (category === 'Kategori6') {
      layerKategori6.addLayer(marker);
    } else if (category === 'Kategori7') {
      layerKategori7.addLayer(marker);
    }
  });
}

// Buat objek kontrol layer dengan ikon khusus untuk setiap layer kategori
var controlLayers = L.control.layers(null, {
  '<img src="gambar/Desain tanpa judul.png" width="20px" class="layer-icon"> Objek Wisata': layerKategori6,
  '<img src="gambar/parkir.png" width="20px" class="layer-icon"> Tempat Parkir': layerKategori5,
  '<img src="gambar/halte.png" width="20px" class="layer-icon"> Halte Bus': layerKategori2,
  '<img src="gambar/info.png" width="20px" class="layer-icon"> Informasi': layerKategori3,
  '<img src="gambar/masjid.png" width="20px" class="layer-icon"> Masjid': layerKategori1,
  '<img src="gambar/gereja.png" width="20px" class="layer-icon"> Gereja': layerKategori7,
  '<img src="gambar/toilet.png" width="20px" class="layer-icon"> Toilet': layerKategori4,
}).addTo(map);

// Buat sebuah layer group yang berisi kedua layer kategori
var allLayers = L.layerGroup([layerKategori1, layerKategori2, layerKategori3, layerKategori4, layerKategori5, layerKategori6, layerKategori7]);

// Tambahkan layer group sebagai satu overlay dalam objek kontrol layer
controlLayers.addOverlay(allLayers, "Semua Kategori");
});



const images = [...document.querySelectorAll('.image')];

document.addEventListener('DOMContentLoaded', function() {
  const galleryImages = document.querySelectorAll('.gallery-image img');
  const popup = document.querySelector('.popup');
  const largeImage = document.querySelector('.large-image');
  const imageName = document.querySelector('.image-name');
  const closeBtn = document.querySelector('.close-btn');
  const leftArrowBtn = document.querySelector('.left-arrow');
  const rightArrowBtn = document.querySelector('.right-arrow');
  const index = document.querySelector('.index');

  let currentIndex = 0;

  // Fungsi untuk menampilkan popup dengan gambar yang sesuai
  function showPopup(imageSrc, imageNameText, imageIndexText) {
    largeImage.src = imageSrc;
    imageName.textContent = imageNameText;
    index.textContent = imageIndexText;
    popup.classList.add('active');
  }

  // Fungsi untuk menyembunyikan popup
  function hidePopup() {
    popup.classList.remove('active');
  }

  // Event listener untuk setiap gambar di galeri
  galleryImages.forEach((image, index) => {
    image.addEventListener('click', function() {
      const imagePath = this.getAttribute('src');
      const imageNameText = this.getAttribute('alt');
      const imageIndexText = String(index + 1).padStart(2, '0');
      showPopup(imagePath, imageNameText, imageIndexText);
      currentIndex = index;
    });
  });

  // Event listener untuk tombol tutup
  closeBtn.addEventListener('click', function() {
    hidePopup();
  });

  // Event listener untuk tombol panah kiri
  leftArrowBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    const imagePath = galleryImages[currentIndex].getAttribute('src');
    const imageNameText = galleryImages[currentIndex].getAttribute('alt');
    const imageIndexText = String(currentIndex + 1).padStart(2, '0');
    showPopup(imagePath, imageNameText, imageIndexText);
  });

  // Event listener untuk tombol panah kanan
  rightArrowBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    const imagePath = galleryImages[currentIndex].getAttribute('src');
    const imageNameText = galleryImages[currentIndex].getAttribute('alt');
    const imageIndexText = String(currentIndex + 1).padStart(2, '0');
    showPopup(imagePath, imageNameText, imageIndexText);
  });
});