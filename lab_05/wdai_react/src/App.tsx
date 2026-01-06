import "./App.css";
import Przyklad7 from "./components/Przyklad7";
// import { Koszyk, NowyKoszyk } from "./components/koszyk/zadanie1";
// import { Licznik, NowyLicznik } from "./components/liczniki/zadanie2";
//zad 3
// import Formularz from "./components/formularze/Formularz";
// import Hasla from "./components/formularze/Haslo";
// import Logowanie from "./components/formularze/Logowanie";
//zad 4
// import Ternary from "./components/inne/Ternary";
// import Aktualizacja from "./components/inne/Aktualizacja";
// import Studenci from "./components/studenci/Studenci";
import StudentManager from "./components/studenci/StudentManager";

function App() {
  // return <Przyklad7 />;
  return (
    <>
      <StudentManager />
    </>
  );
}

export default App;
