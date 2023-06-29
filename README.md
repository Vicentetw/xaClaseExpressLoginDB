# xaClaseExpress
## Endpoints

### Login
- `POST /api/login` - login.
###
Example json
- {
    "user":"admin",
    "password":"admin"
}


### User

- `POST /api/user` - Crear un nuevo usuario.
###
-Example json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "secretpassword"
}

- `GET /api/user/:id` - Obtener información de un usuario específico.
- `PUT /api/user/:id` - Actualizar información de un usuario específico.
- `DELETE /api/user/:id` - Eliminar un usuario específico.

### Book

- `POST /api/book` - Crear un nuevo libro.
  ###
Example json
-{
  "title": "El Gran Libro",
  "author": "Autor Anónimo",
  "year": 2023
}

- `GET /api/book/:id` - Obtener información de un libro específico.
- `PUT /api/book/:id` - Actualizar información de un libro específico.
- `DELETE /api/book/:id` - Eliminar un libro específico.

### Library

- `POST /api/library` - Crear una nueva biblioteca.
 ###
Example json
-{
  "name": "Mi Librería",
  "location": "Dirección",
  "telefono": "4134132143"
}
- `POST http://localhost:8080/library/:libraryID/books` - Crear libro desde biblioteca
- `POST http://localhost:8080/library/1/books` - Ejemplo Crear libro desde biblioteca pasando id de library
Example json
-{
  "isbn": "111111110001",
  "title": "Prueba Libro agregado desde library",
  "author": "prueba author",
  "year": "1926"
}
- `GET /api/library/:id` - Obtener información de una biblioteca específica.
- `PUT /api/library/:id` - Actualizar información de una biblioteca específica.
-  endpoint de ejemplo http://localhost:8080/library/1  
  Example json 
  -{
    "id": 1,
    "name": "Mi Librería modificada",
    "location": "Dirección",
    "telefono": "41341321434134"
}
- `DELETE /api/library/:id` - Eliminar una biblioteca específica.
 
