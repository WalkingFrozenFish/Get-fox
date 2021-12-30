const imageFox = document.querySelector("#imageFox");
const getFox = document.querySelector("#getFox");
const imageBlock = document.querySelector(".image-block")

getFox.addEventListener("click", async () => {
    fetch("https://randomfox.ca/floof/")
        .then(res => res.json())
        .then(data => {
            let image = `<img src="${data.image}" alt="Fox" id="imageFox">`
            imageBlock.innerHTML = "";
            imageBlock.insertAdjacentHTML("afterbegin", image)
        })
})