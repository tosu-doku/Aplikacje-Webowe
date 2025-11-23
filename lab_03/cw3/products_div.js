fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const T = data.products;
    const container = document.createElement("div");

    var len = Math.min(T.length, 2);
    for (var i = 0; i < len; i++) {
      element = T[i];
      const product = document.createElement("div");
      product.classList.add("product");

      const img1 = document.createElement("img");
      img_link = element.images;

      img1.setAttribute("src", img_link);
      img1.setAttribute("height", "200px");
      img1.setAttribute("width", "auto");

      // container.appendChild(img1);

      product.innerHTML =
        element.id +
        "<br>" +
        // element.images +
        // "<br>" +
        element.title +
        "<br>" +
        element.description;

      container.appendChild(img1);

      container.appendChild(product);
    }
    document.body.appendChild(container);
  });
