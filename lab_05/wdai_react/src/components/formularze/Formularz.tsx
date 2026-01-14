import React, { useState } from "react";

const Formularz = () => {
  const [danyInput, updateInput] = useState("");
  return (
    <div>
      <>
        <input
          type="text"
          value={danyInput}
          onChange={(e) => {
            updateInput(e.target.value);
          }}
        ></input>

        <div>wpisany tekst: {danyInput}</div>
      </>
    </div>
  );
};

export default Formularz;
