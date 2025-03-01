const text = "Beautiful  Bangladesh";
const messageBox = document.getElementById('message');

for(let i =0; i < text.length; i++){
    setTimeout(() => {
   messageBox.textContent += text[i];     
    }, i * 1000);
}
