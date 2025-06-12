const containerMain = document.getElementById("containerMain")
const template = document.getElementById("template")

for (let i = 0; i < 2; i++) {
    const clone = template.cloneNode(true);
    containerMain.appendChild(clone);
    
}