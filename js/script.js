const container = document.querySelector(".container")
const qrCodeBtn = document.querySelector("#qr-form button")
const qrCodeInput = document.querySelector("#qr-form input")

const qrCodeImg = document.querySelector("#qr-code img")

// eventos

const geerateQrCode = () => {
    const qrCodeInputVaue = qrCodeInput.value

    if(!qrCodeInputVaue) return

    qrCodeBtn.innerText = "Gerando código..."

    qrCodeImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrCodeInputVaue}`

    
    qrCodeImg.addEventListener("load", () => {
        container.classList.add("active") 
        qrCodeBtn.innerText = "Código Criado!"
    })

}

qrCodeBtn.addEventListener("click", () => {
    geerateQrCode()
})

qrCodeInput.addEventListener("keydown", (e) => {
    if(e.code === "Enter"){
        geerateQrCode() 
    }
})

// Limpar área do QR code

qrCodeInput.addEventListener("keyup", () => {
    if(!qrCodeInput.value) {
        container.classList.remove("active")
        qrCodeBtn.innerText = "Generator QR Code"
    }
})