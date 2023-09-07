const buttons = document.querySelectorAll(".btn");

document.addEventListener('click', (e) => {
    const target = e.target;
    if (!target.closest(".btn")) {
        buttons.forEach(button => button.classList.remove("open-js"));
    } else if (target.closest(".btn")) {
        target.classList.toggle("open-js");
    }
})
