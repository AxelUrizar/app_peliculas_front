# AppCitasVeterinariasFrontend

Aplicación para la gestión de Usuarios, Mascotas y Citas veterinarias.

<a href='https://github.com/AxelUrizar/ProyectoBackend_BuscadorDePeliculas'>Pulsa aquí para ver el repositorio</a>

<br><br>

### Instalación 🔧
<br>

_Antes de instalar nuestro proyecto frontal tendremos que instalar la Api junto a la base de datos los cuales podemos encontrar junto a una guía para instalarlos en el siguiente <a href='https://github.com/AxelUrizar/ProyectoBackend_BuscadorDePeliculas'>repositorio</a>._

_Ahora si, para instalar el proyecto deberás copiar en tu disco local el repositorio de GitHub con el siguiente comando:_

```
git clone https://github.com/AxelUrizar/app_peliculas_front
```
<br>

_Tras lo cual tendremos que entrar a la carpeta generada por el comando anterior y instalar las dependencias con:_

```
npm install
```
o

```
yarn install
```
<br>

_Una vez terminado el paso anterior procederemos a la ejecución de el siguiente comando para poner en marcha el proyecto:_


```
npm run start
```
o
```
yarn start
```
<br>

_Tras acabar con el paso anterior tendremos nuestra página desplegada en el buscador._

<br>

## ¿Qué contiene la página? ⚙️

Barra de navegación:

* Logo de la página clickable para volver a la página principal.

* Botón para crear una cuenta.

* Botón para logearte en caso de que ya tengas una cuenta.

* Link a los prestamos del usuario.

* Link a los detalles de el perfil.

* Vista Administrador con links a usuarios y pedidos (en caso de ser un usuario Administrador).

Vista Home:

* Descripción sobre el sitio.

Vista Perfil: 

* Descripción sobre tu perfil.

* Botón para editar tu perfil

* Boton para desloguearte de tu perfil

Vista listado Prestamos:

* Datos Resumidos de cada prestamo.

* Botón para acceder a los detalles de el prestamo.

Vista detalles Prestamo: 

* Detalles mas extendidos sobre el prestamo.

* Posibilidad de editar los préstamos que no han sido resueltos con anterioridad.

Vista listado Prestamos ADMIN:

* Listado todos los préstamos con detalles reducidos y nombre de el usuario al que corresponden.

Vista listado Usuarios ADMIN:

* Listado todos los usuarios con detalles reducidos.

<br>

## Construido con 🛠️

* Javascript
* React
* Redux

<br>

## Autores ✒️

* **Axel Urizar** - [GitHub](https://github.com/AxelUrizar)
