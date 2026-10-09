# Actividad 8 - Backend NestJS (Emprendedores Ñuble)

Migración de la API REST a la arquitectura modular de **NestJS**, manteniendo total compatibilidad con el cliente frontend Vue. Incluye validaciones robustas, persistencia relacional y documentación auto-generada.

## 1. Requisitos del Entorno
* **Node.js**: v18 o superior
* **Nest CLI**: Instalado globalmente (`npm i -g @nestjs/cli`)
* **MySQL**: Base de datos local llamada `emprendedores_db`

## 2. Variables de Entorno
Crear archivo `.env` basado en `.env.example`:
```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASS=
DB_NAME=emprendedores_db

# 1. Instalar dependencias
npm install

# 2. Levantar el servidor en modo desarrollo
npm run start:dev

# 3. Poblar la base de datos (con el servidor detenido)
npm run seed

Decisiones Técnicas

    Pipes Globales: Se implementó ValidationPipe en main.ts con whitelist: true y forbidNonWhitelisted: true para bloquear propiedades no definidas y auto-transformar tipos de datos.

    DTOs Escalables: UpdateEmprendedorDto utiliza PartialType() de Swagger para heredar opcionalmente las estrictas reglas de CreateEmprendedorDto (ej. mínimo de caracteres, restricciones Enum de rubros).

    TypeORM Sincronizado: Entidad Emprendedor mapeada directamente a MySQL. En entorno de desarrollo se usa synchronize: true para abstraer las migraciones DDL.