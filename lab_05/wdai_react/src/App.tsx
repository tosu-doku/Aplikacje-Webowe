import "./App.css";
import Komentarz from "./components/produkty/Komentarz";
// import { Koszyk, NowyKoszyk } from "./components/koszyk/zadanie1";
// import { Licznik, NowyLicznik } from "./components/liczniki/zadanie2";
//zad 3
// import Formularz from "./components/formularze/Formularz";
// import Hasla from "./components/formularze/Haslo";
// import Logowanie from "./components/formularze/Logowanie";
//zad 4
// import Ternary from "./components/inne/Ternary";
// import Aktualizacja from "./components/inne/Aktualizacja";
//zad 5
// import Studenci from "./components/studenci/Studenci";
// import StudentManager from "./components/studenci/StudentManager";
//zad 6
// import Licznik from "./components/efekty/Licznik";
// import Tytul from "./components/efekty/Tytul";
// import Odliczanie from "./components/efekty/Odliczanie";
//zad 7

function App() {
  return (
    <>
      {" "}
      <Komentarz
        {...{
          id: 1,
          body: "treść komentarza do posta",
          postId: 123,
          likes: 12,
          user: { id: 1, username: "użytkownik", fullname: "Jan Kowalski" },
        }}
      />
      <Komentarz
        {...{
          id: 2,
          body: "treść komentarza do posta 2",
          postId: 123,
          likes: 38,
          user: { id: 1, username: "użytkownik", fullname: "Jan Kowalski" },
        }}
      />
    </>
  );
}

export default App;
