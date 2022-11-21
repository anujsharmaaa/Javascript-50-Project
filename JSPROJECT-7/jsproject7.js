const inputElement = document.getElementById("input");
const submit = document.getElementById("submit");
const image = document.getElementById("img");

const generateQR = () =>{
    if (inputElement.value !== ""){
        image.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + inputElement.value);
        image.style.display = "block"
    } else{
        image.style.display = "none"
    }
}

submit.addEventListener("click", generateQR);