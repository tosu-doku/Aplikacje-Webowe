import React, { useState } from "react";
import Dodawanie from "./Dodawanie";

const StudentManager = () => {
  interface Student {
    imie: string;
    nazwisko: string;
    rocznik: number;
  }

  const [Students, setStudents] = useState<Student[]>([
    { imie: "Jan", nazwisko: "Kowalski", rocznik: 98 },
    { imie: "Jan", nazwisko: "Nowak", rocznik: 70 },
    { imie: "Adam", nazwisko: "Mickiewicz", rocznik: 88 },
  ]);

  const addStudent = (imie: string, nazwisko: string, rocznik: number) => {
    setStudents([...Students, { imie, nazwisko, rocznik }]);
  };

  return (
    <>
      <table>
        {Students.map((a) => (
          <tr>
            {a.imie} {a.nazwisko} {a.rocznik}
          </tr>
        ))}
      </table>
      <Dodawanie studenciak={addStudent} />
    </>
  );
};

export default StudentManager;
