// console.log("js");
// fetch("https://dummyjson.com/products")
//   .then((result) => result.json())
//   .then((data) => {
//     console.log(data);
//     productsList = document.createElement("table");
//     data.products.forEach((element) => {
//       product = document.createElement("tr");

//       title = document.createElement("td");
//       overPhoto = document.createElement("td");
//       photo = document.createElement("img");
//       description = document.createElement("td");

//       title.innerHTML = element.title;
//       description.innerHTML = element.description;
//       photo.src = element.images[0];
//       photo.style = "width: 50%";

//       console.log(element.title);
//       console.log(element.images);

//       //   product.innerHTML = element.title ;

//       overPhoto.appendChild(photo);
//       product.appendChild(overPhoto);
//       product.appendChild(title);
//       product.appendChild(description);

//       productsList.appendChild(product);
//     });
//     document.body.appendChild(productsList);
//   });

// fetch('link').then((res) => res.json()).then((data) => {

// })

// cześć druga

fetch("https://dummyjson.com/products")
  .then((result) => result.json())
  .then((data) => {
    console.log(data);
    productsList = document.createElement("table");
    data.products.forEach((element) => {
      product = document.createElement("tr");

      title = document.createElement("td");
      overPhoto = document.createElement("td");
      photo = document.createElement("img");
      description = document.createElement("td");

      title.innerHTML = element.title;
      description.innerHTML = element.description;
      photo.src = element.images[0];
      photo.style = "width: 50%";

      console.log(element.title);
      console.log(element.images);

      //   product.innerHTML = element.title ;

      overPhoto.appendChild(photo);
      product.appendChild(overPhoto);
      product.appendChild(title);
      product.appendChild(description);

      productsList.appendChild(product);
    });
    document.body.appendChild(productsList);
  });

function refresh(filterOut, sortBy) {
  productsList.replaceChildren();

  productsList = document.createElement("table");
  data.products.forEach((element) => {
    product = document.createElement("tr");

    title = document.createElement("td");
    overPhoto = document.createElement("td");
    photo = document.createElement("img");
    description = document.createElement("td");

    title.innerHTML = element.title;
    description.innerHTML = element.description;
    photo.src = element.images[0];
    photo.style = "width: 50%";

    console.log(element.title);
    console.log(element.images);

    //   product.innerHTML = element.title ;

    overPhoto.appendChild(photo);
    product.appendChild(overPhoto);
    product.appendChild(title);
    product.appendChild(description);

    productsList.appendChild(product);
  });
  document.body.appendChild(productsList);
}

fetch("link")
  .then((res) => {
    res.json();
  })
  .then((data) => {});
