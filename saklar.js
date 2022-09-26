// SAKLAR RUANG TAMU
let toggle_rt1 = document.getElementById('default-toggle-rt1');
let toggle_rt2 = document.getElementById('default-toggle-rt2');
let toggle_rt3 = document.getElementById('default-toggle-rt3');
let toggle_rt4 = document.getElementById('default-toggle-rt4');
let toggle_rt = document.getElementById('default-toggle-rt');
let lampu_rt1 = document.getElementById('lampu-rt1');
let lampu_rt2 = document.getElementById('lampu-rt2');
let lampu_rt3 = document.getElementById('lampu-rt3');
let lampu_rt4 = document.getElementById('lampu-rt4');

// Saklar Kecil Ruang Tamu
function saklarKecilTamu() {

    const kecilTamu = console.log("saklar kecil ruang tamu");

    if (toggle_rt1.checked) {
        lampu_rt1.src = "assets/images/on.gif"
    } else {
        lampu_rt1.src = "assets/images/off.gif"
    }

    if (toggle_rt2.checked) {
        lampu_rt2.src = "assets/images/on.gif"
    } else {
        lampu_rt2.src = "assets/images/off.gif"
    }

    if (toggle_rt3.checked) {
        lampu_rt3.src = "assets/images/on.gif"
    } else {
        lampu_rt3.src = "assets/images/off.gif"
    }

    if (toggle_rt4.checked) {
        lampu_rt4.src = "assets/images/on.gif"
    } else {
        lampu_rt4.src = "assets/images/off.gif"
    }

    return kecilTamu;
}

// Saklar Besar Ruang Tamu
function saklarBesarTamu() {

    const besarTamu = console.log("saklar besar ruang tamu");

    if (toggle_rt.checked) {
        lampu_rt1.src = "assets/images/on.gif"
        lampu_rt2.src = "assets/images/on.gif"
        lampu_rt3.src = "assets/images/on.gif"
        lampu_rt4.src = "assets/images/on.gif"
    } else {
        lampu_rt1.src = "assets/images/off.gif"
        lampu_rt2.src = "assets/images/off.gif"
        lampu_rt3.src = "assets/images/off.gif"
        lampu_rt4.src = "assets/images/off.gif"
    }

    return besarTamu;
}

// SAKLAR RUANG KELUARGA
let toggle_rk1 = document.getElementById('default-toggle-rk1');
let toggle_rk2 = document.getElementById('default-toggle-rk2');
let toggle_rk3 = document.getElementById('default-toggle-rk3');
let toggle_rk = document.getElementById('default-toggle-rk');
let lampu_rk1 = document.getElementById('lampu-rk1');
let lampu_rk2 = document.getElementById('lampu-rk2');
let lampu_rk3 = document.getElementById('lampu-rk3');

function saklarKecilKeluarga() {

    const kecilKeluarga = console.log("saklar kecil ruang keluarga");

    if (toggle_rk1.checked) {
        lampu_rk1.src = "assets/images/on.gif"
    } else {
        lampu_rk1.src = "assets/images/off.gif"
    }

    if (toggle_rk2.checked) {
        lampu_rk2.src = "assets/images/on.gif"
    } else {
        lampu_rk2.src = "assets/images/off.gif"
    }

    if (toggle_rk3.checked) {
        lampu_rk3.src = "assets/images/on.gif"
    } else {
        lampu_rk3.src = "assets/images/off.gif"
    }

    return kecilKeluarga;
}

function saklarBesarKeluarga() {

    const besarKeluarga = console.log("saklar besar ruang keluarga");

    if (toggle_rk.checked) {
        lampu_rk1.src = "assets/images/on.gif"
        lampu_rk2.src = "assets/images/on.gif"
        lampu_rk3.src = "assets/images/on.gif"
    } else {
        lampu_rk1.src = "assets/images/off.gif"
        lampu_rk2.src = "assets/images/off.gif"
        lampu_rk3.src = "assets/images/off.gif"
    }

    return besarKeluarga;
}

// SAKLAR RUANG MAKAN
let toggle_rm1 = document.getElementById('default-toggle-rm1');
let lampu_rm1 = document.getElementById('lampu-rm1');

function saklarMakan() {

    const ruangMakan = console.log("saklar ruang makan");

    if (toggle_rm1.checked) {
        lampu_rm1.src = "assets/images/on.gif"
    } else {
        lampu_rm1.src = "assets/images/off.gif"
    }

    return ruangMakan;
}

// SAKLAR RUANG TIDUR
let toggle_rb1 = document.getElementById('default-toggle-rb1');
let toggle_rb2 = document.getElementById('default-toggle-rb2');
let toggle_rb = document.getElementById('default-toggle-rb');
let lampu_rb1 = document.getElementById('lampu-rb1');
let lampu_rb2 = document.getElementById('lampu-rb2');


function saklarKecilTidur() {

    const kecilTidur = console.log("saklar kecil ruang tidur");

    if (toggle_rb1.checked) {
        lampu_rb1.src = "assets/images/on.gif"
    } else {
        lampu_rb1.src = "assets/images/off.gif"
    }

    if (toggle_rb2.checked) {
        lampu_rb2.src = "assets/images/on.gif"
    } else {
        lampu_rb2.src = "assets/images/off.gif"
    }

    return kecilTidur;
}

function saklarBesarTidur() {

    const besarTidur = console.log("saklar besar ruang tidur");

    if (toggle_rb.checked) {
        lampu_rb1.src = "assets/images/on.gif"
        lampu_rb2.src = "assets/images/on.gif"
    } else {
        lampu_rb1.src = "assets/images/off.gif"
        lampu_rb2.src = "assets/images/off.gif"
    }

    return besarTidur;
}