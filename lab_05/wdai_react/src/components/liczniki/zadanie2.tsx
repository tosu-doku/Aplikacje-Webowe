import React, { useState } from "react";

const Licznik = () => {
  const [ile, setlicznik] = useState(0);
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

type przyciskProps = {
  jakKlikne: () => void;
};

const Przycisk = ({ jakKlikne }: przyciskProps) => {
  return <button onClick={jakKlikne}> Dodaj </button>;
};

const NowyLicznik = () => {
  const [ile, setlicznik] = useState(0);
  const dodaj1 = () => {
    setlicznik((prev) => prev + 1);
  };

  return (
    <div>
      Wartość x: {ile} <br />
      <Przycisk
        jakKlikne={() => {
          dodaj1();
        }}
      />
    </div>
  );
};

export { Licznik, NowyLicznik };
