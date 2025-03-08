# API.REST.PHP.FRONT Documentation

The repository [API.REST.PHP.FRONT](https://github.com/garbo993/API.REST.PHP.FRONT.git) is an application that consumes a REST API developed in PHP, using technologies such as HTML, CSS, and JavaScript for the frontend.

## Prerequisites

- A web server compatible with PHP (e.g., Apache).
- PHP version 7.0 or higher.
- MySQL or MariaDB database.
- A tool to make HTTP requests (e.g., Postman) to test the API.

## Installation

### 1. Clone the repository

Clone the repository into the root directory of your web server (e.g., `htdocs` in XAMPP):

```bash
git clone https://github.com/garbo993/API.REST.PHP.FRONT.git
```

### 2. Configure the database

- Create a database in MySQL or MariaDB.
- Import the necessary tables using the SQL scripts provided in the `database` directory of the repository.

### 3. Configure database connection

Edit the `config/database.php` file to set the database connection credentials:

```php
<?php
return [
    'host' => 'localhost',
    'dbname' => 'database_name',
    'user' => 'username',
    'password' => 'password',
];
```

### 4. Configure the web server

Ensure that the web server is set up correctly to serve the application.  
For example, in Apache, you can create a `.htaccess` file in the project's root directory with the following directives:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

## Usage

Once the above steps are completed, you can access the application through your web browser at the corresponding server URL (e.g., `http://localhost/API.REST.PHP.FRONT/`).

The application allows you to interact with the REST API to perform CRUD operations (Create, Read, Update, Delete) on available resources.



# Documentación de API.REST.PHP.FRONT español

El repositorio [API.REST.PHP.FRONT](https://github.com/garbo993/API.REST.PHP.FRONT.git) es una aplicación que consume una API REST desarrollada en PHP, utilizando tecnologías como HTML, CSS y JavaScript para el frontend.

## Requisitos previos

- Servidor web compatible con PHP (por ejemplo, Apache).
- PHP versión 7.0 o superior.
- Base de datos MySQL o MariaDB.
- Herramienta para realizar peticiones HTTP (por ejemplo, Postman) para probar la API.

## Instalación

### 1. Clonar el repositorio

Clone el repositorio en el directorio raíz de su servidor web (por ejemplo, `htdocs` en XAMPP):

```bash
git clone https://github.com/garbo993/API.REST.PHP.FRONT.git
```

### 2. Configurar la base de datos

- Cree una base de datos en MySQL o MariaDB.
- Implemente las tablas necesarias utilizando los scripts SQL proporcionados en el directorio `database` del repositorio.

### 3. Configurar la conexión a la base de datos

Edite el archivo `config/database.php` para establecer las credenciales de conexión a la base de datos:

```php
<?php
return [
    'host' => 'localhost',
    'dbname' => 'nombre_de_la_base_de_datos',
    'user' => 'usuario',
    'password' => 'contraseña',
];
```

### 4. Configurar el servidor web

Asegúrese de que el servidor web esté configurado para servir la aplicación correctamente.  
Por ejemplo, en Apache, puede crear un archivo `.htaccess` en el directorio raíz del proyecto con las siguientes directivas:

```
RewriteEngine On
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ index.php [QSA,L]
```

## Uso

Una vez completados los pasos anteriores, puede acceder a la aplicación a través de su navegador web en la URL correspondiente a su servidor (por ejemplo, `http://localhost/API.REST.PHP.FRONT/`).

La aplicación le permitirá interactuar con la API REST para realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre los recursos disponibles.

