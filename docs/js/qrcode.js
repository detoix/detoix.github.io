window.addEventListener("DOMContentLoaded", () => {
  const h1 = document.querySelector("h1");
      if (h1) {
        const qrDiv = document.createElement("div");
        qrDiv.id = "qr-code";
        qrDiv.style.marginTop = "1em";
        qrDiv.style.marginBottom = "2em";
        h1.insertAdjacentElement("afterend", qrDiv);

        const script = document.createElement("script");
        script.src = "https://cdn.jsdelivr.net/npm/qrcodejs/qrcode.min.js";
        script.onload = () => {
          new QRCode(qrDiv, {
            text: window.location.href,
            width: 128,
            height: 128,
          });
        };
        document.body.appendChild(script);
      }
});

