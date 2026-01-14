const express = require('express');
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

/*
    W przykładzie 1 mieliśmy problem, gdy podaliśmy niepełne dane.
    Należy się przed tym w jakiś sposób zabezpieczyć
*/

app.post('/student', (req, res) => {
  const { imie, nazwisko, semestr } = req.body;

  if(!imie || !nazwisko || !semestr) {
    return res.status(400).json({
        message: "Musisz podać imie, nazwisko oraz semestr!"
    })
  }

  const nazwa = imie.slice(0, 1) + nazwisko

  res.status(201).json({
    message: 'Dodano nowego studenta!',
    student: { 
        nazwa: nazwa,
        semestr: semestr
    },
  });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});