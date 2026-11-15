# Entrega final — Taller React Native ADSO

El paquete parte del proyecto Expo proporcionado; no se creó una aplicación desde cero. Incluye código e historial Git local, bitácora completa y capturas reales de la app ejecutada en Chromium.

## Organización

- `ExpoApp/`: app Expo, historial `.git`, `package.json`, `package-lock.json`, configuración y README propio.
- `documentacion/`: bitácora Markdown, Word y PDF; tabla de cumplimiento, fuentes y validaciones.
- `evidencias/`: capturas UI y técnicas, resultados de enlaces, pruebas, estructura, eliminaciones justificadas e historial local.

## Estructura final de `src`

```text
src/
├── app/
│   ├── _layout.tsx
│   ├── index.tsx
│   ├── estudios.tsx
│   ├── experiencia.tsx
│   └── hobbies.tsx
└── components/
    ├── MiBoton.tsx
    ├── TarjetaEstudio.tsx
    ├── TarjetaExperiencia.tsx
    └── TarjetaHobby.tsx
```

## Ejecución

```bash
cd ExpoApp
npm ci
npx expo start --web
```

Para Expo Go: `npx expo start`, luego escanea el QR desde un teléfono conectado a la misma red. No se hizo prueba física en esta sesión.

## Correcciones y resultados principales

Hobbies conserva las tres actividades anteriores —Lectura, Deporte y Programación— y suma las dos indicadas recientemente —Escuchar música y Fútbol—. Cada una tiene icono y panel inline, sin ventanas emergentes. Las tarjetas previas mantienen sus iconos originales; música tiene `musical-notes-outline` y Fútbol conserva `football-outline`. La tarjeta musical ofrece las dos URL exactas de Spotify. Contacto usa `mailto:`/`tel:`; LinkedIn y GitHub tienen destino real. La interfaz no menciona el CV. La estructura `src/` coincide exactamente con los nueve archivos de la guía. Los archivos retirados y su justificación están en `evidencias/archivos_eliminados.txt`.

Pruebas: `npx tsc --noEmit`, exportaciones Web y Android JavaScript, y Chromium: cinco hobbies con cinco iconos, expansión inline, playlists, enlaces, HTTP 200 y cero diálogos/errores. Ver `documentacion/validaciones.txt`.

## Git

`main` conserva 11 commits base y siete commits locales de entrega: 18 en total, siete adelante de `origin/main`. No se reescribió el historial base ni se hizo push al remoto. El log completo está en `evidencias/historial_git_final.txt`.

## Cumplimiento final

| Requisito | Resultado | Evidencia | Estado |
|---|---|---|---|
| Estructura `src` | Nueve archivos exactos; dos carpetas requeridas | `estructura_src_final.txt`, captura 10 | Verificado |
| Intereses | Cinco hobbies con expansión inline e icono en cada tarjeta | Capturas 01, 03–05 | Verificado |
| Contacto | Mail y teléfono con esquemas válidos | Captura 06, `enlaces_funcionales.txt` | Verificado en DOM; handler físico no ejecutado |
| Perfiles | LinkedIn y GitHub; nueva pestaña | Captura 06, pruebas individuales | Verificado; HTTP 200 |
| Hobbies | Lectura, Deporte, Programación, Escuchar música y Fútbol | Capturas 03–05 y código 14 | Verificado |
| Playlists | Dos URL exactas y `target=_blank` | Captura 04, registro de enlaces | Verificado; HTTP 200 |
| Linux e iconos | Paleta oscura; iconos previos conservados y uno por tarjeta | Capturas UI y código | Verificado |
| Historial Git | 18 commits locales; remoto sin push | Captura 11, historial textual | Verificado localmente |
| Ejecución | Web, TypeScript y bundle Android JS | Captura 12 y validaciones | Verificado en entorno; Expo Go pendiente |

La bitácora desarrolla paso a paso los cambios, problemas, elementos retirados, resultados y límites.