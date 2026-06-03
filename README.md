# MMJ Smart Electronics Web

Sitio web corporativo de **MMJ Smart Electronics**, construido con Astro y Tailwind CSS.

- Producción: <https://www.smartelectronics.com.pe/>
- Aula virtual externa: <https://aula.smartelectronics.com.pe/>
- Paquete npm: `mmj-landing`

El proyecto publica la presencia web principal de MMJ: home institucional, carreras y cursos técnicos, servicios de hardware/software/IoT, consultoría, catálogo de productos, proyectos y páginas de contacto.

## Stack

- Astro `4.16`
- TypeScript
- Tailwind CSS `3.4`
- Astro Content Collections
- MDX
- `astro:assets` para optimización de imágenes
- Fuente principal: Roboto Condensed Variable

## Requisitos

- Node.js compatible con Astro 4, idealmente `18.17+`
- pnpm, recomendado porque el repositorio incluye `pnpm-lock.yaml`

## Desarrollo Local

Instala dependencias:

```bash
pnpm install
```

Levanta el servidor de desarrollo:

```bash
pnpm dev
```

Astro normalmente servirá el sitio en:

```text
http://localhost:4321
```

## Scripts

```bash
pnpm dev      # servidor local de desarrollo
pnpm start    # alias de astro dev
pnpm build    # astro check + astro build
pnpm preview  # previsualiza el build generado
pnpm astro    # CLI de Astro
```

El build de producción genera la salida estática en `dist/`.

## Estructura

```text
.
├── public/                 # Archivos servidos desde la raíz pública
├── src/
│   ├── components/         # Componentes por sección del sitio
│   ├── content/            # JSON tipados con Astro Content Collections
│   ├── data/               # Datos auxiliares usados por componentes
│   ├── Images/             # Imágenes e iconos del sitio
│   ├── layouts/            # Layout base
│   └── pages/              # Rutas Astro
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

## Rutas Principales

- `/`: página principal
- `/embebido`, `/hardware`, `/software`, `/iot`, `/presencial`: landings de carreras
- `/:carrera/:course`: detalle de curso generado desde `src/content/courses`
- `/servicio-hardware`: servicio de hardware a medida
- `/servicio-software`: servicio de software a medida
- `/servicio-iot`: servicio IoT con componentes propios
- `/servicio-hardware/fabricacion-pcb`: detalle de operación
- `/consultoria`: consultoría para empresas y estudiantes
- `/catalogo`: catálogo de productos
- `/proyectos`: proyectos destacados
- `/contacto`: bloque de ubicación/contacto
- `/aula`: aviso con enlace al aula virtual externa

Las rutas dinámicas viven principalmente en:

- `src/pages/[carrera]/index.astro`
- `src/pages/[carrera]/[course].astro`
- `src/pages/[service]/index.astro`
- `src/pages/[service]/[operation].astro`

## Contenido Editable

La mayoría del contenido se administra con archivos JSON dentro de `src/content` y se valida en `src/content/config.ts`.

### Carreras

Ubicación:

```text
src/content/carrers/
```

La colección se llama `carrers` en el código. Si agregas una nueva carrera, además del JSON debes registrar su slug en `src/pages/[carrera]/index.astro` y actualizar la navegación si debe aparecer en el menú.

### Cursos

Ubicación:

```text
src/content/courses/<carrera>/<curso>.json
```

Cada archivo genera una página en:

```text
/<carrera>/<curso>
```

Los cursos se cargan automáticamente desde la colección `courses`.

### Servicios

Ubicación:

```text
src/content/services/
```

Actualmente `servicio-hardware` y `servicio-software` usan la ruta dinámica `src/pages/[service]/index.astro`. `servicio-iot` tiene una página independiente en `src/pages/servicio-iot.astro` y componentes dedicados en `src/components/ServiciosIoT`.

### Productos

Ubicación:

```text
src/content/products/<categoria>/
```

El catálogo se renderiza desde `src/components/Catalogo/CatalogoProducts.astro` y soporta búsqueda, filtros por categoría y ordenamiento por precio.

### Información Institucional

Ubicación:

```text
src/content/infoMMJ/
```

Se usa para datos generales, métricas o información de marca que alimenta secciones del sitio.

## Componentes y Estilos

- El layout global está en `src/layouts/Layout.astro`.
- La navegación principal está en `src/components/NavBar.astro`.
- El footer y datos de contacto están en `src/components/Footer.astro`.
- Los componentes se agrupan por sección: `Home`, `Carreras`, `Course`, `Servicios`, `ServiciosIoT`, `Catalogo`, `Consultoria`, `Operation` y `Proyectos`.
- La paleta, fuente y breakpoints personalizados se definen en `tailwind.config.mjs`.
- Los aliases de importación están en `tsconfig.json`: `@src/*` y `@public/*`.

## Publicación

No hay adapter de servidor configurado en `astro.config.mjs`, por lo que el sitio se compila como estático.

Flujo recomendado antes de publicar:

```bash
pnpm build
pnpm preview
```

Después de validar, publica el contenido generado en `dist/` según la plataforma de hosting.

## Notas de Mantenimiento

- El sitio no incluye backend propio en este repositorio.
- El aula virtual vive fuera del proyecto y se enlaza desde la navegación y la ruta `/aula`.
- Muchos cambios editoriales se pueden hacer solo modificando JSON en `src/content`.
- Para nuevas rutas de carrera o servicio, revisa también `NavBar.astro`, rutas dinámicas y componentes asociados.
