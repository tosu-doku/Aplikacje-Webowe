import React from "react";

// const Produkt = ({ name }: any) => {
//   return <li> Nazwa produktu: {name} </li>;
// };

type propsProduktu = {
  name: string;
};

const Produkt = ({ name }: propsProduktu) => {
  return <li> Nazwa produktu: {name} </li>;
};

const Koszyk = () => {
  return (
    <ul>
      <Produkt name={"Jabłko"} />
      <Produkt name={"Gruszka"} />
      <Produkt name={"Śliwka"} />
      <Produkt name={"Malina"} />
      <Produkt name={"Ślimak"} />
    </ul>
  );
};

const NowyKoszyk = () => {
  const owoce = ["Dynia", "Gruszka", "Śliwka", "Malina", "Ślimak"];

  return (
    <ul>
      {owoce.map((produkt, index) => (
        <Produkt key={index} name={produkt} />
      ))}
    </ul>
  );
};

export { Koszyk, NowyKoszyk };
