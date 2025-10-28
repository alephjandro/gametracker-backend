API RESTful (tecnología relacionada con los endpoints) desarrollada con Node.js, Express y MongoDB para gestionar una biblioteca personal de videojuegos y sus reseñas.

Tecnologías implementadas en el proyecto:
-Node.js
-Express
-Mongoose
-dotenv (Libreria de Node.js para guardar variables secretras, como las que usé para crear mi ruta de almacenamiento en MongoDB)
-Cors (Paquete que permite el intercambio de información de nuestro frontend y backend. )

Endpoints principales para juegos

Método    Endpoint            Descripción
GET       /api/juegos         Obtiene todos los juegos
GET       /api/juegos/:id     Obtiene un juego por su ID
POST      /api/juegos         Crea un nuevo juego
PUT       /api/juegos/:id     Actualiza un juego existente
DELETE    /api/juegos/:id     Elimina un juego

Endpoints principales para reseñas

Método    Endpoint                  Descripción
GET       /api/resenas              Obtiene todos los juegos
GET       /api/resenas/juego/:id    Obtiene un juego por su ID
POST      /api/resenas              Crea un nuevo juego
PUT       /api/resenas/:id          Actualiza un juego existente
DELETE    /api/resenas/:id          Elimina un juego


Respuestas de error

Código     Descripción
400        Datos inválidos
404        Recurso no encontrado

Autor: Alejandro José Bolaños Muñoz

Jovenes CreaTivos 2025