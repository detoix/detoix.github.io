const qrDiv = document.createElement("div");
document.querySelector("h1").insertAdjacentElement("afterend", qrDiv);

const script = document.createElement("script");
script.src = "https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js";
script.onload = () => {
  new QRCode(qrDiv, {
    text: window.location.href,
    width: 192,
    height: 192,
  });
};
document.body.appendChild(script);