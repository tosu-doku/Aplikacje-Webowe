const express = require("express");
const app = express();
const sqlite3 = require("sqlite3").verbose();

// npm run devStart 

function connect() {
  return new sqlite3.Database("./database.db");
}

const pobierzPosty = () => {
  const db = connect();

  return new Promise((resolve, reject) => {
    db.all("SELECT * from posts", [], (err, rows) => {
      resolve(rows);
    });
  });
};

app.get("/posts", async (req, res) => {
  const posts = await pobierzPosty();
  /*
        const magic = posts .... 
        const drugie = await pobierzCos(magic)
    */

  res.status(200).json({
    message: "Pobrano posty",
    posts: posts,
  });
});

// ksiazki

const pobierzKsiazki = () => {
  const db = connect();

  return new Promise((resolve, reject) => {
    db.all("SELECT * from books", [], (err, rows) => {
      resolve(rows);
    });
  });
};

app.get("/books", async (req, res) => {
  const books = await pobierzKsiazki();

  res.status(200).json({
    message: "Pobrano ksiazki",
    books: books,
  });
});

// /* Linijki istotne, aby nie pojawiały się błędy z przetwarzaniem danych z req.body */
// //Pozwala na przetwarzanie raw
// app.use(express.json());
// //Pozwala na przetwarzanie x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true })); // Obsługa form-urlencoded i form-data

app.get("/", (req, res) => {
  console.log("dziala");
  res.status(500).send("a");
  //   res.send("test");
});

app.post("/student", (req, res) => {
  const { imie, nazwisko, semestr } = req.body;
  /*
    const imie = req.body.imie
    const nazwisko = req.body.nazwisko
    const semestr = req.body.semestr
  */

  const nazwa = imie.slice(0, 1) + nazwisko;

  res.status(201).json({
    message: "Dodano nowego studenta!",
    student: {
      nazwa: nazwa,
      semestr: semestr,
    },
  });
});

app.get("/student/:id", (req, res) => {
  res.status(200).json({
    message: "Wyświetlanie danych studenta",
    id: req.params.id,
  });
});

// app.listen(3000);
app.listen(3000, () => {
  console.log("Serwer włączony!");
});
