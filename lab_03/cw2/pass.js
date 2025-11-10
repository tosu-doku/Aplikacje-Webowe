const GenerateBtn = document.getElementById("generate-password");
const minLen = document.getElementById("min-length");
const maxLen = document.getElementById("max-length");
const useUpper = document.getElementById("upper-case");
const useSpecial = document.getElementById("special-chars");

GenerateBtn.addEventListener("click", () => {
  console.log(minLen.value, maxLen.value, useUpper.checked, useSpecial.checked);
  if (parseInt(minLen.value) <= parseInt(maxLen.value)) {
    password = generate(
      minLen.value,
      maxLen.value,
      useUpper.checked,
      useSpecial.checked
    );
    console.log(password);
    const show_pass = document.createElement("div");
    show_pass.innerHTML = password;
    document.body.appendChild(show_pass);
    alert(password);
  } else {
    throw new Error("Minimal length can't be higher than maximal length");
  }
});

function generate(mi, mx, u, s) {
  code = u + 2 * s;
  console.log(code);
  var characters;
  var password = "";
  switch (code) {
    case 0:
      characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      break;
    case 1: //upper
      characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      break;
    case 2: //special
      characters = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*?";
      break;
    case 3: //full
      characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*?";
      break;
    default:
      characters = "abcdefghijklmnopqrstuvwxyz0123456789";
      break;
  }
  mi = Number(mi);
  mx = Number(mx);
  len = Math.floor(Math.random() * (mx - mi + 1)) + mi;
  console.log("length " + len);
  for (let i = 0; i < len; i++) {
    const randomInd = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomInd);
  }
  return password;
}
