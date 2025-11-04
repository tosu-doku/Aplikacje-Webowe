// setTimeout(() => {
//   console.log("Test JS");
// }, 1000);

const HomeBtn = document.getElementById("HOME-button");
const ContactBtn = document.getElementById("CONTACT-button");
const GalleryBtn = document.getElementById("GALLERY-button");

HomeBtn.addEventListener("click", () => {
  window.location.href = "home.html";
});

ContactBtn.addEventListener("click", () => {
  window.location.href = "contact.html";
});

GalleryBtn.addEventListener("click", () => {
  window.location.href = "gallery.html";
});
