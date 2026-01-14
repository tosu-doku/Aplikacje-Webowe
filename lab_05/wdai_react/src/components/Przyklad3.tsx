import React from "react";
import Przyklad3a from "./Przyklad3a";

const Przyklad3 = () => {
  const osoby = [
    { id: 1, imie: "Jan", nazwisko: "Kowalski" },
    { id: 2, imie: "Jan", nazwisko: "Nowak" },
    { id: 3, imie: "Adam", nazwisko: "Mickiewicz " },
  ];

  return (
    <div>
      {/* przyklad tabeli, wymagane klucze! */}
      {[<div key={1}>e</div>, <div key={2}>f</div>]}

      {osoby.map((osoba) => {
        return (
          <div key={osoba.id}>
            Komponent z osobą:
            <Przyklad3a imie={osoba.imie} nazwisko={osoba.nazwisko} />
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
};

/*
    osoby.map((osoba) => {
        return <div>cos</div>
    })

    osoby.map((osoba) => (
        <div>cos</div>
    ))

*/

export default Przyklad3;
