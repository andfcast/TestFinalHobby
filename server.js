const express = require('express');
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;

// Servir archivos estáticos (HTML, CSS, JS) desde una carpeta 'public'
app.use(express.static('public'));

app.listen(PORT, function(err){
	if (err) console.log("Error en configuración de servidor")
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});