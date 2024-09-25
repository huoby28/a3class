const correctPassword = "tehnik24";
const passwordModal = document.getElementById("passwordModal");
const passwordInput = document.getElementById("passwordInput");
const submitPassword = document.getElementById("submitPassword");
const container = document.querySelector(".container");

// Cek jika ada sandi tersimpan di localStorage
if (localStorage.getItem("password") === correctPassword) {
    container.style.filter = "none"; // Hilangkan blur
    passwordModal.style.display = "none"; // Sembunyikan modal
} else {
    container.style.filter = "blur(5px)"; // Tambahkan blur ke halaman
}

submitPassword.addEventListener("click", function () {
    const enteredPassword = passwordInput.value;

    if (enteredPassword === correctPassword) {
        localStorage.setItem("password", enteredPassword); // Simpan ke localStorage
        container.style.filter = "none"; // Hilangkan blur
        passwordModal.style.display = "none"; // Sembunyikan modal
    } else {
        alert("Sandi salah, coba lagi!");
    }
});

const passwordInputs = document.getElementById("passwordInput");
const togglePassword = document.getElementById("togglePassword");
let passwordVisible = false;

togglePassword.addEventListener("click", function () {
    if (passwordVisible) {
        passwordInputs.type = "password";
        togglePassword.innerHTML = '<i class="bi bi-eye-slash-fill"></i>';
        passwordVisible = false;
    } else {
        passwordInputs.type = "text";
        togglePassword.innerHTML = '<i class="bi bi-eye-fill"></i>';
        passwordVisible = true;
    }
});