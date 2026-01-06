import React, { useState } from "react";

const Przyklad5 = () => {
  const [liczba, setLiczba] = useState(5); //hook, 5 - wartosc poczatkowa

  return (
    <div>
      Wartość x: {liczba}
      <br />
      <button
        onClick={() => {
          //   setLiczba(liczba + 1);
          //   setLiczba(liczba + 1);

          setLiczba((prev) => prev + 1);
          setLiczba((prev) => prev + 1);
          setLiczba((prev) => prev + 1);
        }}
      >
        Test!
      </button>
    </div>
  );
};

/*
    Co dodatkowo warto pokazać w tym przykładzie?
    Co jeżeli w onClicku podwójnie użylibyśmy setLiczba(liczba + 1) ? 
    -> Po kliknieciu zwiekszy sie tylko raz 
    Uzylismy dwa razy, wiec oczekiwalibysmy ze zwiekszy sie podwójnie
    Wytłumaczenie dlaczego na ćwiczeniach - chodzi o moment, w którym wykonuje sie setLiczba 
    Rozwiązanie?
    setLiczba(staraLiczba => staraLiczba + 1)
*/

export default Przyklad5;
