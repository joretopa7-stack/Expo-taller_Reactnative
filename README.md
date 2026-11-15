# Hoja de vida móvil — Jorge Torres

Aplicación de hoja de vida creada con Expo, React Native, TypeScript y Expo Router para el taller práctico del programa ADSO. Presenta perfil, formación, experiencia académica/proyecto e intereses documentados. La interfaz usa una paleta oscura inspirada en escritorios Linux/Ubuntu; se conservaron los nombres y diseños de los íconos provistos por el proyecto.

## Requisitos

- Node.js compatible con la versión de Expo declarada por el proyecto.
- npm.
- Expo Go si se desea abrir la aplicación en un teléfono.

## Instalación y ejecución

```bash
npm ci
npx expo start
```

Escanea el QR con Expo Go en el teléfono y mantén el computador y el dispositivo en una red que permita la conexión. Para ejecutar la versión web:

```bash
npx expo start --web
```

Las cuatro pestañas son Inicio, Estudios, Experiencia e Intereses. Los botones de contacto y las tarjetas de intereses presentan alertas; en navegador se usa una alerta web equivalente, mientras que en Android/iOS se llama a `Alert.alert`.

## Estructura relevante

```text
src/
├── app/
│   ├── _layout.tsx       # navegación por pestañas e iconos
│   ├── index.tsx         # perfil y contacto
│   ├── estudios.tsx      # formación académica/complementaria
│   ├── experiencia.tsx   # proyecto académico
│   └── hobbies.tsx       # intereses formativos con alertas
├── components/
│   ├── MiBoton.tsx
│   ├── TarjetaEstudio.tsx
│   ├── TarjetaExperiencia.tsx
│   └── TarjetaHobby.tsx
└── utils/
    └── mostrarAlerta.ts  # Alert.alert móvil / window.alert web
```

## Dependencias del taller

Las versiones exactas son las resueltas por `package-lock.json`; las declaraciones pueden ser rangos semver.

| Paquete | Versión instalada | Función y relación con esta app |
|---|---:|---|
| `expo-router` | 58.0.31 | Rutas por archivo y layouts; define las cuatro pantallas y el navegador inferior en `src/app/_layout.tsx`. [Docs](https://docs.expo.dev/router/basics/navigation-layouts/) · [npm](https://www.npmjs.com/package/expo-router/v/58.0.31) |
| `react-native-safe-area-context` | 5.11.1 | Acceso a zonas seguras para evitar que el contenido quede bajo notch/barras. Está disponible como soporte del árbol de navegación; las pantallas de este taller no importan la API directamente. [Expo](https://docs.expo.dev/versions/latest/sdk/safe-area-context/) · [Repositorio](https://github.com/appandflow/react-native-safe-area-context) |
| `react-native-screens` | 4.30.1 | Primitivas nativas usadas por infraestructura de navegación; no crea por sí sola las pestañas ni el contenido visual. [Expo](https://docs.expo.dev/versions/latest/sdk/screens/) · [Repositorio](https://github.com/software-mansion/react-native-screens/blob/main/README.md) |
| `expo-linking` | 58.0.17 | Utilidades para deep links y URLs de la app. Está instalada, pero las acciones de contacto actuales muestran datos en alertas y no abren enlaces externos. [Expo](https://docs.expo.dev/versions/latest/sdk/linking/) · [npm](https://www.npmjs.com/package/expo-linking) |
| `expo-constants` | 58.0.16 | Lectura de configuración y valores constantes de Expo. Está instalada, pero esta app no la importa directamente porque los datos del perfil son estáticos. [Expo](https://docs.expo.dev/versions/latest/sdk/constants/) · [npm](https://www.npmjs.com/package/expo-constants) |
| `expo-status-bar` | 58.0.5 | Ajusta el estilo de texto de la barra de estado; se configura en el layout global para el fondo oscuro. [Expo](https://docs.expo.dev/versions/latest/sdk/status-bar/) · [Repositorio](https://github.com/expo/expo/tree/sdk-58/packages/expo-status-bar) |
| `@expo/vector-icons` | 15.1.1 | Provee los glifos Ionicons usados en pestañas, contacto y tarjetas. La guía Expo informa que el paquete está deprecado para proyectos nuevos; se conserva porque lo exige el taller y ya forma parte del ZIP. [Expo](https://docs.expo.dev/guides/icons/) · [npm](https://www.npmjs.com/package/@expo/vector-icons) |

## Datos y límites de la personalización

La información del perfil se tomó del CV adjunto. El proyecto *Huellitas Saludables* se presenta como proyecto académico, no como experiencia laboral formal. Como el CV no enumera pasatiempos personales, la pestaña solicitada muestra intereses de aprendizaje y competencias allí documentadas, sin inventar actividades recreativas. Se omitieron los datos de referencias familiares.

## Comprobaciones ejecutadas

- `npm ci --no-audit --no-fund`: dependencias instaladas correctamente.
- `npx tsc --noEmit`: TypeScript sin errores tras corregir tipos de color/ref detectados en el layout y en el componente web heredado. La pantalla `explore` original se conserva, pero se oculta del menú para que solo queden las cuatro pestañas del taller.
- `npx expo export --platform web`: bundle web exportado a `dist/`.
- `npx expo export --platform android --no-bytecode --output-dir /tmp/ExpoApp_android`: bundle JavaScript Android exportado. La opción omite bytecode Hermes por incompatibilidad de arquitectura del compilador incluido en este entorno ARM64; esto no equivale a probar Expo Go en un teléfono.
- Playwright/Chromium: cuatro pestañas, cuatro botones de contacto y tres tarjetas interactivas verificados; cero errores de consola/runtime.
- Solicitud HTTP local a Expo Web: respuesta `200 OK`.

La compilación web comprueba empaquetado y renderizado web; no equivale a una prueba en dispositivo físico/Expo Go. Para una ejecución nativa final, abrir el proyecto con Expo Go en Android o iOS.

## Repositorio

Repositorio remoto incluido en la configuración Git del ZIP: [Expo-taller_Reactnative](https://github.com/joretopa7-stack/Expo-taller_Reactnative). El historial conserva los 11 commits base y agrega cinco commits locales reales de esta entrega, sin reescribir ni forzar la rama. El ZIP incluye el historial local actualizado; el remoto no se publicó desde esta sesión.
