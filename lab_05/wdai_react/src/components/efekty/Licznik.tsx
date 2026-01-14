import React, { useState, useEffect } from "react";

const Licznik = () => {
  const [ile, setlicznik] = useState(0);

  useEffect(() => console.log("Licznik zwiększył się do", ile), [ile]);

  useEffect(() => console.log("Hello world"), []);

  return (
    <div>
      Wartość x: {ile} <br />
      <button
        onClick={() => {
          setlicznik((prev) => prev + 1);
        }}
      >
        {" "}
        Dodaj{" "}
      </button>
    </div>
  );
};

export default Licznik;
