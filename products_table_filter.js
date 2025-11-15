fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((data) => {
    const T = data.products;
    const container = document.getElementById("table");

    document.body.appendChild(container);

    filter_elem = document.getElementById("filter");
    filter_value = document.getElementById("filter").value;

    reload();

    filter_elem.addEventListener("change", () => {
      //input - co literke, change - enter
      filter_elem.style.backgroundColor = "aqua";
      filter_value = document.getElementById("filter").value;

      console.log(filter_value);
      reload();
    });

    sort_elem = document.getElementById("sort-by");
    sort_value = null;

    sort_elem.addEventListener("change", () => {
      // sortujemy poprzez przesuwanie danych w 'data'
      sort_elem.style.backgroundColor = "aqua";
      sort_value = document.getElementById("sort-by").value;

      sort();
      reload();
    });

    function reload() {
      console.log("reloading");
      unload_items();
      load_header();
      load_items();
    }

    function load_header() {
      console.log("loading header");
      const row = document.createElement("tr");
      const header = document.createElement("th");
      const header2 = document.createElement("th");
      const header3 = document.createElement("th");

      header.innerText = "image";
      header2.innerHTML = "product title";

      header3.innerHTML = "product description";

      row.appendChild(header);
      row.appendChild(header2);
      row.appendChild(header3);

      container.appendChild(row);
    }

    function load_items() {
      var len = Math.min(T.length, 30);
      for (var i = 0; i < len; i++) {
        element = T[i];

        console.log(filter_value);
        if (filter_value != null) {
          if (
            !element.title.toLowerCase().includes(filter_value.toLowerCase())
          ) {
            continue;
          }
        }

        const row = document.createElement("tr");

        // image
        const product_image = document.createElement("td");
        // product.classList.add("product");

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
      if (container.childElementCount == 1) {
        // 1 bcs of header
        container.innerHTML = "0 elements found with current filter :C";
      }
    }

    function unload_items() {
      container.replaceChildren(); //delete all previous children from container
    }

    function sort() {
      quickSort(T, 0, T.length - 1, sort_value);
    }

    function partition(arr, low, high) {
      let pivot = arr[high];
      let i = low - 1;

      for (let j = low; j <= high - 1; j++) {
        switch (sort_value) {
          case "price_asc":
            if (arr[j].price < pivot.price) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            break;
          case "price_desc":
            if (arr[j].price > pivot.price) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            break;
          case "rating":
            if (arr[j].rating > pivot.rating) {
              i++;
              [arr[i], arr[j]] = [arr[j], arr[i]];
            }
            break;
        }
      }
      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    }

    function quickSort(arr, low, high) {
      if (low >= high) return;
      let pi = partition(arr, low, high);

      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  });
