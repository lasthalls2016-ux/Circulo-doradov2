# SafePyme — Prototipo web

Landing page funcional para el servicio de ciberseguridad gestionada
"SafePyme", construida con Next.js 14 (App Router), Tailwind CSS y
lucide-react.

## Ejecutar en local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Desplegar en Vercel

1. Sube esta carpeta a un repositorio de GitHub.
2. Entra a https://vercel.com/new e importa el repositorio.
3. Vercel detecta Next.js automáticamente — no se necesita configuración
   adicional. Presiona "Deploy".

También puedes desplegar desde la terminal con la CLI de Vercel:

```bash
npm install -g vercel
vercel
```

## Estructura

```
app/
  layout.tsx     # Layout raíz, fuentes (Sora + Inter) y metadatos
  page.tsx       # Toda la landing page: header, hero, secciones y formulario
  globals.css    # Estilos base de Tailwind
tailwind.config.ts
```

## Funcionalidad incluida

- Formulario de "Solicitar demo" con validación básica y confirmación
  simulada en pantalla (sin backend; para producción, conectar a un
  servicio de email o CRM).
- Menú responsive con navegación móvil.
- Estados hover/focus en todos los botones y enlaces interactivos.
- Diseño responsive (mobile-first) en todas las secciones.

## Próximos pasos sugeridos

- Conectar el formulario a un backend real (API route de Next.js, o un
  servicio como Resend/HubSpot).
- Agregar analítica (Vercel Analytics o Google Analytics).
- Reemplazar testimonios y cifras de ejemplo por datos reales una vez
  disponibles.
