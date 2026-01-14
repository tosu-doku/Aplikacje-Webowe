import React from "react";

const Studenci = () => {
  interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
  }

  const Students: Student[] = [
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 98 },
    { imie: "Jan", nazwisko: "Nowak", rocznik: 70 },
    { imie: "Adam", nazwisko: "Mickiewicz ", rocznik: 88 },
  ];

  return (
    <table>
      {Students.map((a) => (
        <tr>
          {a.imie} {a.nazwisko} {a.rocznik}
        </tr>
      ))}
    </table>
  );
};

export default Studenci;
