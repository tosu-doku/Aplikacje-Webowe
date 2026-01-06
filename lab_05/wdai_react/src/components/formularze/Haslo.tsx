import React, { useState } from "react";

const Hasla = () => {
  const [password, updatePassword] = useState("");
  const [repeatPassword, updateRepeatPassword] = useState("");

  var shownText: string;

  if (password === "" && repeatPassword === "") {
    shownText = "Proszę wprowadzić hasło";
  } else if (password !== repeatPassword) {
    shownText = "Hasła nie są zgodne ";
  } else {
    shownText = "";
  }

  return (
    <div>
      <input
        type="text"
        value={password}
        placeholder="wprowadź hasło"
        onChange={(e) => {
          updatePassword(e.target.value);
        }}
      ></input>
      <input
        type="text"
        value={repeatPassword}
        placeholder="powtórz hasło"
        onChange={(e) => {
          updateRepeatPassword(e.target.value);
        }}
      ></input>

      <div>{shownText}</div>
    </div>
  );
};

export default Hasla;
