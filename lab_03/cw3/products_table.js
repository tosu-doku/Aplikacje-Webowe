fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const T = data.products;
    const container = document.getElementById("table");

    var len = Math.min(T.length, 2);
    for (var i = 0; i < len; i++) {
      element = T[i];

      const row = document.createElement("tr");

      // image
      const product_image = document.createElement("td");

      const img1 = document.createElement("img");
      img_link = element.images;

      img1.setAttribute("src", img_link);
      img1.setAttribute("height", "200px");
      img1.setAttribute("width", "auto");

      product_image.appendChild(img1);
      row.appendChild(product_image);

      // title
      const title = document.createElement("td");
      title.innerHTML = element.title;

      row.appendChild(title);

      // description
      const desc = document.createElement("td");
      desc.innerHTML = element.description;
      row.appendChild(desc);

      container.appendChild(row);
    }
    document.body.appendChild(container);
  });
