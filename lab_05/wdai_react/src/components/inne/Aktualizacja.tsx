import React, { useState } from "react";

const Aktualizacja = () => {
  const [product, setProduct] = useState({ nazwa: "Pomidor", cena: 50 });

  return (
    <div>
      Aktualnie {product.nazwa} kosztuje {product.cena}
      <button
        onClick={() => {
          setProduct((prev) => ({ ...prev, cena: 100 }));
        }}
      >
        Zmień cenę
      </button>
    </div>
  );
};

export default Aktualizacja;
