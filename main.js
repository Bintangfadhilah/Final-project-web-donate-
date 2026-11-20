let totaldonasi = 0

function tambahdonasi () {
    let inputnama = document.getElementById ('inputnama');
    let inputemail = document.getElementById ('inputemail');
    let inputnominal = document.getElementById ('inputnominal');
    let inputpayment = document.getElementById ('inputpayment');
    let inputpesan = document.getElementById ('inputpesan');

    let nama = inputnama.value;
    let email = inputemail.value;
    let nominal = inputnominal.value;
    let payment = inputpayment.value;
    let pesan = inputpesan.value;

    if (nama === "" || email === "" || nominal === "" || payment === "" || pesan === "") {
    alert('Harap isi semua data');
    return;
    }

    let tekskosong = document.getElementById('tekskosong');
    tekskosong.style.display ="none"

    let itemLaporan = document.createElement('section');
    itemLaporan.className = "itemlaporan";
    itemLaporan.innerHTML = "<h3>" + nama + "<span class='badge'>" + payment + "</span></h3>" +"<p>" + email + nominal + pesan + "</p>";
     document.getElementById('daftardonasi').appendChild(itemLaporan);

    let daftardonasi = document.getElementById('daftardonasi');
    daftardonasi.appendChild(itemLaporan)

    totaldonasi = totaldonasi + 1
    let jumlahlaporan = document.getElementById('jumlahlaporan');
    jumlahlaporan.innerText = totaldonasi

    inputnama.value="";
    inputnominal.value="";
    inputemail.value="";
    inputpesan.value="";
}