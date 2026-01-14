const express = require('express');
const app = express();

/* Linijki istotne, aby nie pojawiały się błędy z przetwarzaniem danych z req.body */
//Pozwala na przetwarzanie raw
app.use(express.json());
//Pozwala na przetwarzanie x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); // Obsługa form-urlencoded i form-data 

app.post('/student', (req, res) => {
  const { imie, nazwisko, semestr } = req.body;
  /*
    const imie = req.body.imie
    const nazwisko = req.body.nazwisko
    const semestr = req.body.semestr
  */

  const nazwa = imie.slice(0, 1) + nazwisko

  res.status(201).json({
    message: 'Dodano nowego studenta!',
    student: { 
        nazwa: nazwa,
        semestr: semestr
    },
  });
});

app.get("/student/:id", (req, res) => {
    res.status(200).json({
      message: 'Wyświetlanie danych studenta',
      id: req.params.id
    });
})

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});