const modal = document.getElementById("modal");

function openModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

window.onclick = function (e) {
    if (e.target == modal) {
        closeModal();
    }
}

document.getElementById("trialForm").addEventListener("submit", function (e) {

    e.preventDefault();

    const owner = document.getElementById("owner").value.trim();
    const restaurant = document.getElementById("restaurant").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const address = document.getElementById("address").value.trim();

    if (owner === "" || restaurant === "" || phone === "" || address === "") {
        alert("Please fill all fields.");
        return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
        alert("Enter a valid 10-digit contact number.");
        return;
    }

    document.getElementById("message").innerHTML =
        "🎉 Thank you! Our team will contact you within 24 hours.";

    document.getElementById("trialForm").reset();

    setTimeout(() => {
        closeModal();
        document.getElementById("message").innerHTML = "";
    }, 3000);
});