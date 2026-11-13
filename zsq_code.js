document.addEventListener("DOMContentLoaded", function () {
    const codeBlocks = document.querySelectorAll("pre code");

    codeBlocks.forEach((codeEl) => {
        const preEl = codeEl.parentElement;

        const wrapper = document.createElement("div");
        wrapper.className = "foldable-wrapper";

        const header = document.createElement("div");
        header.className = "foldable-header";
        header.textContent = `fold`; 

        const body = document.createElement("div");
        body.className = "foldable-body";

        preEl.parentNode.replaceChild(wrapper, preEl);
        body.appendChild(preEl);
        wrapper.appendChild(header);
        wrapper.appendChild(body);

        wrapper.classList.add("open");
        body.style.maxHeight = "none";

        header.addEventListener("click", () => {
            const isOpen = wrapper.classList.contains("open");
            if (isOpen) {
                body.style.maxHeight = body.scrollHeight + "px";
                body.offsetHeight;
                body.style.maxHeight = "0";
                wrapper.classList.remove("open");
                header.textContent = "open"; 
            } else {
                body.style.maxHeight = body.scrollHeight + "px";
                wrapper.classList.add("open");
                header.textContent = "fold"; 
                body.addEventListener("transitionend", function handler() {
                    if (wrapper.classList.contains("open")) {
                        body.style.maxHeight = "none";
                    }
                    body.removeEventListener("transitionend", handler);
                });
            }
        });
    });
});