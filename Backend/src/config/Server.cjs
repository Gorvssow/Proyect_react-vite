const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://localhost:27017/Nervo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Conexión exitosa a MongoDB');
    })
    .catch((error) => {
        console.error('Error de conexión a MongoDB:', error);
    });

// Configuración de Express
app.use(express.json());

// Rutas del servidor
app.get('/', (req, res) => {
    res.send('¡El servidor está funcionando!');
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor backend escuchando en el puerto ${PORT}`);
});