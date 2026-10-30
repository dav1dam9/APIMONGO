const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const port = 3000


app.use(bodyParser.json());


const postRoute = require('./routes/post');
app.use('/servicios', postRoute);


app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor');
});


mongoose.connect('mongodb://localhost:27017/Coindex')
    .then(() => {
        console.log('Sí hay conexión a la BD');
    })
    .catch((error) => {
        console.log('Error al conectar a la BD:', error);
    });


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
