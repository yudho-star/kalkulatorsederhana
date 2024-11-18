let display = document.getElementById('display');

// Menambahkan karakter ke tampilan
function appendCharacter(char) {
    display.value += char;
}

// Menghapus semua isi tampilan
function clearDisplay() {
    display.value = '';
}

// Menghapus karakter terakhir
function deleteLast() {
    display.value = display.value.slice(0, -1);
}

// Menghitung hasil ekspresi matematika
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}