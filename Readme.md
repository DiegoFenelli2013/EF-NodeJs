# EF-NodeJs

## 🔎 Descripción

EF-NodeJs es una API REST construida con Node.js + Express, pensada para gestionar productos y autenticación de usuarios mediante JWT. Permite operaciones CRUD sobre productos y maneja autenticación/autorization para proteger rutas.

## 🛠️ Tecnologías usadas

- Node.js
- Express
- JSON Web Tokens (JWT)
- CORS

## 🚀 Comenzar / Instalación

Cloná el repositorio y prepará el entorno:

```bash
git clone https://github.com/DiegoFenelli2013/EF-NodeJs.git
cd EF-NodeJs
npm install
```

/ (raíz)  
├─ index.js # servidor principal / punto de entrada  
├─ .env # variables de entorno  
└─ src/  
 ├─ routes/ # rutas de la API (auth, products, etc.)  
 ├─ controllers/ # lógica de controladores  
 ├─ middleware/ # middlewares (autenticación, etc.)  
 ├─ data/ # utilidades auxiliares (token, configuración, etc.)  
 ├─ models/ # Modelo de datos ( estructuras de datos, conexion DB, etc.)  
 └─ services/ # Logica de negocio ( validaciones, adaptacion de datos, etc.)

| Ruta                   | Método | Descripción                   | Protegida |
| ---------------------- | ------ | ----------------------------- | --------- |
| `/auth/login`          | GET    | Login de usuario (genera JWT) | ✅ No     |
| `/api/products`        | GET    | Listar productos              | ✅ No     |
| `/api/products/:id`    | GET    | Listar un producto            | ✅ No     |
| `/api/products/create` | POST   | Crear un nuevo producto       | ✅ Sí     |
| `/api/products/:id`    | PUT    | Actualizar producto por ID    | ✅ Sí     |
| `/api/products/:id`    | DELETE | Eliminar producto por ID      | ✅ Sí     |

🧪 Uso / Ejemplos

Ejemplo de request para login (Postman / fetch / axios):

GET /auth/login

Content-Type: application/json

{
"email": "usuario@ejemplo.com",
"password": "123456"
}

Ejemplo de respuesta:

{
"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
