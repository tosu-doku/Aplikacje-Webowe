import React from "react";

const Ternary = () => {
  var a: boolean = true;
  var b: boolean = false;
  return (
    <div>
      {a ? "Stwierdzenie a jest prawdziwe" : "Stwierdzenie a jest fałszywe"}
      <br />
      {b ? "Stwierdzenie b jest prawdziwe" : "Stwierdzenie b jest fałszywe"}
    </div>
  );
};

export default Ternary;
