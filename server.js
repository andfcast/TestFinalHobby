const express = require('express');
const cors = require('cors');
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 3000;
const comments = [{
    "id": 1, "fecha": new Date(), "texto":"Comentario inicial"
}];
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Servir archivos estáticos (HTML, CSS, JS) desde una carpeta 'public'
app.use(express.static('public'));
app.use(cors());
app.get('/comments',(req,res) =>{
    res.status(200).json(comments);
});

app.post("/comments", (req, res) => {
    const reqBody = req.body.Comments;
    let newComment = {
        id:comments.length + 1,
        fecha: new Date(),
        texto: reqBody
    };
    comments.push(newComment);
    res.status(201).json({
        message: 'Comentario creado exitosamente',
        data: newComment
      });
  });

app.listen(PORT, function(err){
	if (err) console.log("Error en configuración de servidor")
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});