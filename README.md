# Hoja de vida móvil — Jorge Torres

Aplicación del taller ADSO construida sobre el proyecto Expo entregado. Conserva las cuatro pestañas y los componentes reutilizables requeridos, con una interfaz oscura inspirada en Linux/Ubuntu.

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

No se añadieron subcarpetas a `src`. Los componentes del starter que no son requeridos y no se importan desde esta estructura se retiraron después de comprobar sus referencias; se conservaron configuración, assets y dependencias necesarios para ejecutar Expo.

## Ejecución

```bash
npm ci
npx expo start --web
```

Para iniciar Expo Go, ejecuta `npx expo start` y escanea el QR desde un dispositivo con acceso a la red del computador. La prueba física se debe completar en el dispositivo del aprendiz.

## Funcionalidad

- **Inicio:** correo `mailto:joretopa7@gmail.com`, teléfono `tel:+573115236763`, [LinkedIn](https://linkedin.com/in/jorge-torres-paez-120198417) y [GitHub](https://github.com/joretopa7-stack).
- **Estudios:** tarjetas académicas y complementarias; los programas activos se diferencian visualmente con una cápsula morada “En Curso”.
- **Experiencia:** Huellitas Saludables se presenta como proyecto académico.
- **Hobbies:** cinco tarjetas con icono propio —Lectura (`book-outline`), Deporte (`football-outline`), Programación (`code-slash-outline`), Escuchar música (`musical-notes-outline`) y Fútbol (`football-outline`). Cada tarjeta se expande inline. La música muestra dos enlaces exactos de Spotify:
  - **Urban Christian:** <https://open.spotify.com/playlist/75UN9lrSGbkYl8JHf2ojvO?si=GcqoFYs9QxeII7e8yxclOw>
  - **Románticas cristianas:** <https://open.spotify.com/playlist/7tgriHVMSbBuihjWC6Ccol?si=eCMerDimRWqmpKmGrRZZjQ>

Los perfiles y las playlists abren pestaña nueva en Web con `noopener noreferrer`; `mailto:` y `tel:` usan los esquemas que el sistema operativo puede atender. Se preservan los iconos originales de las tarjetas previas y de fútbol; la tarjeta musical también tiene un icono. No hay referencias a la procedencia de datos en la interfaz.

## Dependencias y pruebas

Se mantuvieron las dependencias del taller y el lockfile: `expo-router`, `react-native-safe-area-context`, `react-native-screens`, `expo-linking`, `expo-constants`, `expo-status-bar` y `@expo/vector-icons`.

Validado en el entorno de desarrollo con `npx tsc --noEmit`, exportación Web y bundle Android JavaScript con `--no-bytecode`. Chromium verificó las cuatro pestañas, las cinco tarjetas e iconos, todos los despliegues inline, las cuatro URL de contacto/perfiles, ambas playlists, apertura en pestaña nueva y ausencia de diálogos y errores JavaScript. Los enlaces externos respondieron HTTP 200 en la comprobación directa. El registro detallado está en `../documentacion/validaciones.txt`.

## Git

La copia conserva el historial base y los commits locales de la entrega. No se reescribieron commits existentes ni se hizo `push`; el estado final de rama y remoto está en `../evidencias/historial_git_final.txt`.
