let qrCodeBox = document.getElementById("qrcode-box");
let qrCode = document.getElementById("qr-code");
let qrText = document.getElementById("qr-text");

function generateQrcode() {
  if (qrText.value.length > 0) {
    qrCode.src =
      "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
      qrText.value;
    qrCodeBox.classList.add("show-img");
  }else{
    qrText.classList.add("error");
    setTimeout(()=>{
        qrText.classList.remove("error");
    },1000)
  }
}
