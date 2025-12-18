console.log("jestem w js");

mini = document.getElementById("mini");
maxi = document.getElementById("maxi");
bigLetters = document.getElementById("duzeLitery");

const generateBtn = document.createElement("button");
generateBtn.innerHTML = "wygeneruj haslo";

document.body.appendChild(generateBtn);

generateBtn.addEventListener("click", () => {
  console.log("generating password");
  let n1 = Number(mini.value);
  let n2 = Number(maxi.value);
  let big = Number(bigLetters.checked);

  console.log(n1);
  console.log(n2);
  console.log(big);

  if (n1 > n2) {
    alert("zle dane");
    return;
  } else {
    generatedPassword = generate(n1, n2, big);
    alert("wygenerowane haslo: " + generatedPassword);
  }
});

function generate(n1, n2, b) {
  len = Math.random() * (n2 - n1) + n1;
  pass = "";
  letters1 = "qwertyuioplkjhgfdsazxcvbnm";
  letters2 = "qwertyuioplkjhgfdsazxcvbnmQWERTYUIOPLKJHGFDSAZXCVBNM";
  used_letters = "a";
  if (b) {
    used_letters = letters2;
  } else {
    used_letters = letters1;
  }

  for (let i = 0; i < len; i++) {
    pass += used_letters[Math.floor(Math.random() * used_letters.length)];
  }
  return pass;
}
