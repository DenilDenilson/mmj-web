# MMJ Web

Sitio web corporativo de **MMJ Smart Electronics** construido con **Astro** y **Tailwind CSS**.

El proyecto centraliza la presencia web de la empresa para mostrar:

- servicios a medida de hardware, software e IoT,
- carreras y cursos técnicos,
- catálogo de productos electrónicos,
- proyectos realizados,
- acceso al aula virtual externa.

## Stack

- Astro 4
- Tailwind CSS 3
- TypeScript
- Astro Content Collections

## Scripts

```bash
pnpm dev
pnpm build
pnpm preview
```

También existen los equivalentes con `npm` definidos en `package.json`:

```bash
npm run dev
npm run build
npm run preview
```

## Estructura principal

```text
.
├── src/
│   ├── components/     # Componentes de UI por sección del sitio
│   ├── content/        # Contenido tipado: servicios, carreras, cursos, productos
│   ├── layouts/        # Layout base
│   ├── pages/          # Rutas Astro
│   └── Images/         # Assets del sitio
├── public/             # Archivos públicos
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

## Rutas principales

- `/`: home del sitio
- `/:carrera`: landing de carrera
- `/:carrera/:course`: detalle de curso
- `/servicio-hardware`
- `/servicio-software`
- `/servicio-iot`
- `/consultoria`
- `/catalogo`
- `/proyectos`
- `/contacto`
- `/aula`: página informativa que dirige al aula virtual externa

Las rutas dinámicas están definidas principalmente en:

- `src/pages/[carrera]/index.astro`
- `src/pages/[carrera]/[course].astro`
- `src/pages/[service]/index.astro`
- `src/pages/[service]/[operation].astro`

## Modelo de contenido

La mayor parte del contenido editable vive en `src/content` y se valida con Astro Content Collections desde `src/content/config.ts`.

Colecciones disponibles:

- `carrers`: información general de cada carrera
- `courses`: cursos por carrera
- `services`: páginas de servicios
- `products`: catálogo de productos
- `infoMMJ`: métricas e información institucional

### Cómo agregar o editar contenido

#### Carreras

Edita o agrega archivos JSON dentro de:

```text
src/content/carrers/
```

Cada entrada define el hero, descripción, objetivos, proyectos y demás datos de la carrera.

#### Cursos

Edita o agrega archivos JSON dentro de:

```text
src/content/courses/<carrera>/
```

Cada archivo genera una página de curso dentro de la ruta:

```text
/<carrera>/<slug-del-curso>
```

#### Servicios

Edita:

```text
src/content/services/
```

Actualmente hay páginas de servicios para hardware, software e IoT, aunque IoT usa una ruta propia (`src/pages/servicio-iot.astro`) con componentes dedicados.

#### Productos del catálogo

Edita o agrega archivos JSON dentro de:

```text
src/content/products/<categoria>/
```

El catálogo se renderiza desde `src/components/Catalogo/CatalogoProducts.astro` y permite:

- búsqueda por texto,
- filtro por categoría,
- ordenamiento por precio.

## Componentes

Los componentes están organizados por área funcional, por ejemplo:

- `src/components/Home`
- `src/components/Carreras`
- `src/components/Course`
- `src/components/Servicios`
- `src/components/ServiciosIoT`
- `src/components/Catalogo`
- `src/components/Consultoria`
- `src/components/Operation`

Esto facilita ubicar cambios visuales según la sección del sitio.

## Layout global

El layout base está en:

```text
src/layouts/Layout.astro
```

Desde ahí se inyectan:

- la barra de navegación,
- el footer,
- estilos globales básicos,
- la tipografía principal.

## Consideraciones del proyecto

- El sitio es mayormente estático; no se observan integraciones de backend propias.
- El aula virtual no vive en este repositorio. La ruta `/aula` solo redirige visualmente hacia `https://aula.smartelectronics.com.pe/`.
- El contenido depende fuertemente de archivos JSON en `src/content`, por lo que muchos cambios editoriales no requieren tocar componentes.

## Desarrollo local

1. Instala dependencias:

```bash
pnpm install
```

2. Inicia el entorno local:

```bash
pnpm dev
```

3. Abre la URL que muestre Astro en consola, normalmente:

```text
http://localhost:4321
```

## Build de producción

```bash
pnpm build
pnpm preview
```

`pnpm build` ejecuta primero `astro check` y luego la compilación estática.

## Pendientes observados

- El README anterior era una plantilla genérica y no describía el repositorio.
- Algunas páginas parecen estar en desarrollo o simplificadas, por ejemplo `contacto` reutiliza el bloque de ubicación y ciertas secciones están comentadas.
- Hay rutas y componentes preparados para crecer, pero no todas las áreas muestran el mismo nivel de terminación.
