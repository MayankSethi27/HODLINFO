console.log("toggle");
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".teleport-switch-control-input");
    const bodyTag = document.body;

    toggleButton.addEventListener("change", function() {
        if (toggleButton.checked) {
            bodyTag.classList.add("dark-mode");
        } else {
            bodyTag.classList.remove("dark-mode");
        }
    });
});
