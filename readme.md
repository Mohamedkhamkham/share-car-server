<h1> Principal Routes </h1>

| HTTP Method  | Route                   | Description                          |
|--------------|-------------------------|--------------------------------------|
| GET          | `/maps`                 | API de Google Maps                   |
| GET          | `/trips`                | Mis viajes                           |
| POST         | `/signup`               | Crear usuario nuevo                  |
| POST         | `/login`                | Iniciar sesión                       |
| POST         | `/verify`               | Verificar sesión                     |
 

<h1> My Trips Routes</h1>

| HTTP Method  | Route                   | Description                          |
|--------------|-------------------------|--------------------------------------|
| GET          | `/myTrips`              | Viajes del usuario                   |
| POST         | `/my-trips/add`         | Crear viaje de conductor             |
| GET          | `/my-trips/details`     | Detalles del viaje                   |
| DELETE       | `/myTrips/delete`       | Eliminar un viaje de conductor        |
| PUT          | `/myTrips/edit`         | Editar un viaje del conductor         |




<h1>Profile Routes</h1>

| HTTP Method  | Route                     | Description                          |
|--------------|---------------------------|--------------------------------------|
| GET          | `/user`                   | Perfil de usuario                    | 
| PUT          | `/user/edit`              | Editar Perfil de usuario             |
| POST         | `/user/delete`            | Eliminar Perfil de usuario           |


<h1> Manejo de Errores en el Servidor </h1>

| HTTP Method  | Route          | Description                          |
|--------------|----------------|--------------------------------------|
| GET          | `/error/404`   | Página de error para recurso no encontrado (404)   |
    

