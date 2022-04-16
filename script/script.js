const nome = document.querySelector(".name-area");

nome.addEventListener("input", () => {
    document.querySelector(".card-name").textContent = nome.value;
});

const atk = document.querySelector(".atk");

atk.addEventListener("input", function() {
    document.querySelector(".card-atk").textContent = atk.value;
});