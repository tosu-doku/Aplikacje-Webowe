import React from "react";

/*
    Dodatek VSCODE:
    Reactjs code snippets

    pozwala na tworzenie podstawowej struktury komponentu z wykorzystaniem "rsc" -> ENTER

    Przyklad1 - najprostszy komponent z samą zawartością tesktową
*/
interface Student {
  imie: string;
  wiek: number;
}

// const a: number = 5;

const student: Student = {
  imie: "Jan",
  wiek: 20,
};

const add = (x: number, y: number): number => {
  return x + y;
};

const Przyklad1 = () => {
  const a = 5;
  const b = 15;
  console.log("abc");

  return (
    <div>
      Test {a} {add(a, a)}
      <b> {b}</b>
      {student.imie}
    </div>
  );
};

export default Przyklad1;
