import React, { useState } from "react";

const Logowanie = () => {
  const [name, updateName] = useState("");
  const [password, updatePassword] = useState("");
  const [repeatPassword, updateRepeatPassword] = useState("");

  var shownText: string;
  var isDisabled: boolean = true;

  if (password === "" || repeatPassword === "" || name === "") {
    isDisabled = true;
  } else {
    isDisabled = false;
  }

  function checkValues() {
    if (password !== repeatPassword) {
      shownText = "Hasła nie są zgodne";
    } else {
      shownText = "Zalogowano poprawnie";
    }
    alert(shownText);
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        placeholder="Nazwa użytkownika"
        onChange={(e) => {
          updateName(e.target.value);
        }}
      ></input>
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
      <br />
      <button
        disabled={isDisabled}
        onClick={() => {
          checkValues();
        }}
      >
        {" "}
        potwierdź
      </button>
    </div>
  );
};

export default Logowanie;
