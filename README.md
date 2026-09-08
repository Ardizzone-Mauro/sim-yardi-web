# SIM-YArdi — Web institucional React + Vite

Proyecto institucional responsive construido con React + Vite.

## Stack
- React 19
- Vite 7
- Lucide React para iconografía
- CSS puro, sin frameworks visuales

## Ejecutar
```bash
npm install
npm run dev
```

## Build de producción
```bash
npm run build
npm run preview
```

## Estructura
- `src/App.jsx` — composición principal
- `src/components/` — header, footer, cards y títulos
- `src/data/articles.js` — contenido de publicaciones
- `src/styles.css` — sistema visual responsive
- `public/assets/` — imágenes del proyecto
- `public/robots.txt` — base SEO
- `public/site.webmanifest` — metadatos de instalación

## SEO
La home ya incluye:
- title y meta description
- Open Graph
- Twitter Cards
- Schema.org
- robots.txt
- preload de imagen principal
- lazy loading en imágenes secundarias

Para una etapa pública real, recomiendo:
1. definir dominio
2. agregar `canonical`
3. generar `sitemap.xml`
4. crear páginas/URLs reales para cada artículo
5. prerenderizar o migrar la capa pública de artículos a SSR/SSG si el blog crece mucho
6. conectar Google Search Console y Analytics/Plausible
7. usar WebP/AVIF para mejorar Core Web Vitals

## Publicaciones
Por ahora se cargan desde `src/data/articles.js`.
Después podemos conectarlo a:
- Strapi
- Sanity
- Contentful
- Supabase
- una API .NET
- Markdown/MDX


## Identidad visual / logo
Se incorporaron variantes optimizadas a partir del logo entregado:
- `sim-yardi-mark-navbar.webp`: símbolo compacto para navbar.
- `sim-yardi-logo-full.webp`: logo completo con fondo transparente.
- `sim-yardi-logo-footer.webp`: variante optimizada para el footer oscuro.
- `favicon-96.png`: favicon.
- `apple-touch-icon.png`: ícono para dispositivos móviles.

El navbar usa el símbolo dentro de un contenedor blanco para conservar contraste sobre el fondo azul oscuro sin alterar los colores originales del logo.
