
window.addEventListener(
    "resize", getSizes, false);

let out = document.querySelector("body");

function getSizes() {
    let zoom = ((window.outerWidth - 10)
        / window.innerWidth) * 100;
          
    out.textContent = zoom;

    console.log("object", out.textContent);
}