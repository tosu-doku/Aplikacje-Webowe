import React, { useState } from "react";

interface Student {
  studenciak: (imie: string, nazwisko: string, rocznik: number) => void;
}

const Dodawanie = ({ studenciak }: Student) => {
  const [imie, setImie] = useState("");
  const [nazwisko, setNazwisko] = useState("");
  const [rocznik, setRocznik] = useState("");
  var disableButton: boolean;

  if (imie == "" || nazwisko == "" || rocznik == "") {
    disableButton = true;
  } else {
    disableButton = false;
  }

  const addStudenciak = () => {
    if (isNaN(Number(rocznik)) || Number(rocznik) < 0) {
      alert("popraw rocznik");
      return;
    }
    studenciak(imie, nazwisko, Number(rocznik));
    setImie("");
    setNazwisko("");
    setRocznik("");
  };

  return (
    <div>
      <input
        type="text"
        value={imie}
        placeholder="Imie studenta"
        onChange={(e) => setImie(e.target.value)}
      ></input>
      <input
        type="text"
        value={nazwisko}
        placeholder="Nazwisko studenta"
        onChange={(e) => setNazwisko(e.target.value)}
      ></input>
      <input
        type="text"
        value={rocznik}
        placeholder="Rocznik studenta"
        onChange={(e) => setRocznik(e.target.value)}
      ></input>
      <button onClick={addStudenciak} disabled={disableButton}>
        Dodaj
      </button>
    </div>
  );
};

export default Dodawanie;
