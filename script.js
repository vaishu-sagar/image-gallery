const images = document.querySelectorAll(".image");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modal-img");
const closeBtn = document.getElementById("close");

images.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = image.src;
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
