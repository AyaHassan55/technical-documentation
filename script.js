document.querySelectorAll("pre").forEach((block) => {

    // إنشاء أيقونة
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", "fa-copy", "copy-icon");

    // إضافتها داخل ال pre
    block.appendChild(icon);

    // عند الضغط
    icon.addEventListener("click", () => {
        const code = block.querySelector("code").innerText;

        navigator.clipboard.writeText(code).then(() => {
            icon.classList.remove("fa-copy");
            icon.classList.add("fa-check");

            setTimeout(() => {
                icon.classList.remove("fa-check");
                icon.classList.add("fa-copy");
            }, 1500);
        });
    });

});