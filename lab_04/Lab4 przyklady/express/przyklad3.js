const express = require('express');
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

function connect() {
    return new sqlite3.Database('./database.db');
}

const pobierzPosty = () => {
    const db = connect()

    return new Promise((resolve, reject) => {
        db.all("SELECT * from posts", [], (err, rows) => {
            resolve(rows)
        })
    })
}

app.get('/posts', async (req, res) => {
    const posts = await pobierzPosty();
    /*
        const magic = posts .... 
        const drugie = await pobierzCos(magic)
    */

    res.status(200).json({
        message: 'Pobrano posty',
        posts: posts
    });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("Serwer włączony!");
});