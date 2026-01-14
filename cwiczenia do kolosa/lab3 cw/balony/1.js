btn = document.createElement("button");
btn.innerHTML = "DODAJ";
document.body.appendChild(btn);

inputa = document.createElement("input");
inputa.innerHTML = "ile dodać?";
document.body.appendChild(inputa);

btn.addEventListener("click", () => {
  console.log(Number(inputa.value));
  ile = Number(inputa.value);

  for (let a = 0; a < ile; a++) {
    console.log(a);
    createballon();
    document.body.appendChild(ballon);
  }
});

function createballon() {
  ballon = document.createElement("img");
  ballon.src = "ballon.jpg";
  ballon.id = "balon";

  ballon.addEventListener("click", function () {
    console.log("a");
    this.style.scale = 0.5;
    this.style.transform = "translateY(-500px)";
  });
}
