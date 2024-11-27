# Sistema de Reservas - Frontend

Este es el frontend para el sistema de reservas, desarrollado con SvelteKit.

## Requisitos

- Node.js 18.x o superior
- El backend debe estar corriendo para que el frontend pueda consumir la API.

## Configuración del Frontend

1. **Clonar el repositorio**:
   ```bash
   git clone https://github.com/tu-usuario/sistema-reservas-frontend.git
   cd sistema-reservas-frontend
Instalar dependencias: Asegúrate de tener todas las dependencias necesarias ejecutando:

bash
Copiar código
npm install
Configurar la URL de la API: En el archivo src/lib/api.js (o en el archivo de configuración que utilices para las solicitudes HTTP), configura la URL base de la API para que apunte al backend en ejecución:

javascript
Copiar código
const API_URL = 'https://localhost:7139/api';
Ejecutar el frontend: Para iniciar el frontend, ejecuta el siguiente comando:

bash
Copiar código
npm run dev
Acceder al frontend: Una vez que el frontend esté en ejecución, abre tu navegador y accede a la URL:

text
Copiar código
http://localhost:3000
Aquí podrás interactuar con la interfaz de usuario del sistema de reservas.

Funcionalidades
Ver reservas: Se pueden consultar todas las reservas creadas.
Crear una nueva reserva: Los usuarios pueden realizar nuevas reservas.
Actualizar una reserva: Los usuarios pueden editar sus reservas existentes.
Eliminar una reserva: Los usuarios pueden eliminar reservas previamente creadas.
Endpoints consumidos por el frontend
GET /reservas: Obtiene todas las reservas.
POST /reservas: Crea una nueva reserva.
PUT /reservas/{id}: Actualiza una reserva existente.
DELETE /reservas/{id}: Elimina una reserva.

# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
