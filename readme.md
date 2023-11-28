<h1> Principal Routes </h1>

| HTTP Method  | Route                   | Description                             |
|--------------|-------------------------|-----------------------------------------|
| GET          | `/api/map`                 | API de Google Maps                   |
| GET          | `/api/trips`                | Mis viajes                           |
| POST         | `/api/signup`               | Crear usuario nuevo                  |
| POST         | `/api/login`                | Iniciar sesión                       |
| POST         | `/api/verify`               | Verificar sesión                     |
 

<h1> My Trips Routes</h1>

| HTTP Method  | Route                   | Description                          |
|--------------|-------------------------|--------------------------------------|
| GET          | `/api/trips`            | Viajes del usuario                   |
| POST         | `/api/trips/add`        | Crear viaje de conductor             |
| GET          | `/api/trips/:id/details`| Detalles del viaje                   |
| DELETE       | `/api/trips/:id/delete` | Eliminar un viaje de conductor        |
| PUT          | `/api/trips/:id/edit`   | Editar un viaje del conductor         |




<h1>Profile Routes</h1>

| HTTP Method  | Route                     | Description                          |
|--------------|---------------------------|--------------------------------------|
| GET          | `/api/user`                   | Perfil de usuario                    | 
| PUT          | `/api/user/edit`              | Editar Perfil de usuario             |
| POST         | `/api/user/delete`            | Eliminar Perfil de usuario           |


