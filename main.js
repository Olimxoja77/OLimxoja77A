let inp1 = document.getElementById("inp1");
let div = document.querySelector("div");
let btn = document.querySelector("button");
let inp2 = document.getElementById("inp2");



document.addEventListener("DOMContentLoaded",() =>{
    btn.addEventListener("click", () => {
      div.innerHTML = "";
      let qr = new QRCode(div, {
        text: inp1.value,
        width: 200,
        height: 200,
        colorDark: inp2.value,
      })
      inp1.value = "";
    });
    
})
