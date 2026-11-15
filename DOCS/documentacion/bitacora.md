# Bitácora de desarrollo — Taller React Native ADSO

## 1. Portada

**Servicio Nacional de Aprendizaje — SENA**  
**Centro:** Centro de Gestión de Mercados, Logística y TIC (CGMLTI)  
**Programa:** Análisis y Desarrollo de Software (ADSO)  
**Competencia:** 38368 — Desarrollar la solución de software de acuerdo con el diseño y metodologías de desarrollo  
**Resultado de aprendizaje:** 593108-04 — Codificar el software de acuerdo con el diseño establecido  
**Fase del proyecto:** Ejecución  
**Taller:** Creando componentes y navegación por pestañas en React Native  
**Aprendiz:** Jorge Alejandro Torres Páez  
**Instructor:** Jhonny Orlando Guerrero Matabanchoy  
**Fecha de actualización:** 15 de noviembre de 2026

## Contenido

| Sección | Sección |
|---|---|
| 1. Portada | 2. Introducción |
| 3. Objetivo general | 4. Objetivos específicos |
| 5. Descripción del taller | 6. Herramientas y tecnologías |
| 7. Requerimientos y decisiones | 8. Estructura final de src |
| 9. Arquitectura | 10. Paso a paso |
| 11. Estilo Linux e iconos | 12. Perfil y hobbies |
| 13. Historial Git | 14. Evidencias fotográficas |
| 15. Ejecución | 16. Pruebas y cumplimiento |
| 17. Problemas y soluciones | 18. Resultado final |
| 19. Conclusiones | |

## 2. Introducción

Esta bitácora actualiza el informe del taller y documenta la revisión final solicitada. Se conservó el proyecto Expo previamente entregado: se corrigió la interacción de Intereses, se verificaron Contacto y Perfiles, se restauraron Lectura, Deporte y Programación del proyecto base y se conservaron Música y Fútbol. Cada tarjeta muestra un icono y despliega su contenido inline. También se retiró contenido de procedencia de la interfaz y se alineó `src/` con el árbol exacto de la guía. No se creó un proyecto alternativo.

La aplicación se ejecutó en Expo Web y Chromium. Se verificaron enlaces, expansión inline, compilación TypeScript, exportaciones Web y Android JavaScript. Este informe diferencia lo probado en navegador de lo pendiente en un teléfono con Expo Go.

## 3. Objetivo general

Actualizar el proyecto Expo existente para que cumpla la guía del taller y las correcciones finales: cuatro pestañas, nueve archivos exactos en `src/`, componentes reutilizables, enlaces reales y cinco hobbies desplegables integrados en la página, cada uno con icono, conservando la apariencia Linux.

## 4. Objetivos específicos

- Comparar `src/` con el árbol requerido por la guía y retirar archivos no usados.
- Mantener las cuatro rutas y los cuatro componentes reutilizables.
- Corregir la interacción de Intereses para que sea inline y no modal.
- Restaurar Lectura, Deporte y Programación del proyecto base y mantener “Escuchar música” y “Fútbol”, asignando un icono visible a cada tarjeta.
- Mantener los dos destinos exactos de Spotify dentro del panel de Música.
- Usar esquemas `mailto:` y `tel:` y enlaces web reales para LinkedIn y GitHub.
- Retirar referencias a la procedencia del perfil de la interfaz.
- Comprobar que los nombres de iconos existentes permanezcan y que el tema visual oscuro continúe.
- Ejecutar el proyecto, revisar su comportamiento y actualizar README, bitácora y evidencias.

## 5. Descripción del taller y autoridad de requisitos

La guía CGMLTI pide una aplicación móvil de hoja de vida con cuatro pantallas navegables desde una barra inferior; fija cinco rutas en `src/app/` y cuatro componentes reutilizables en `src/components/`. También solicita al menos tres tarjetas de estudio, una diferencia visual para formación SENA en curso y una cápsula morada “En Curso”. El taller solicita investigar e instalar `expo-router`, `react-native-safe-area-context`, `react-native-screens`, `expo-linking`, `expo-constants`, `expo-status-bar` y `@expo/vector-icons`.

El reto original pedía `Alert.alert` al pulsar hobbies. La instrucción adicional del usuario pidió explícitamente despliegue natural dentro de la página y prohibió ventanas emergentes. Por ser la indicación más reciente y específica, los intereses se implementaron como paneles inline animados, sin `Alert` ni modal. El resto de los requisitos de la guía se mantiene cuando no entra en conflicto con esa modificación.

## 6. Herramientas y tecnologías

Las versiones corresponden al `package-lock.json` que se conserva en la entrega.

| Paquete | Versión resuelta | Función en el proyecto |
|---|---:|---|
| Expo | 58.0.25 | Plataforma y exportación de la app. |
| React | 19.3.0 | Renderizado de componentes. |
| React Native | 0.88.1 | Componentes y estilos multiplataforma. |
| TypeScript | 6.0.3 | Tipado y comprobación estática. |
| `expo-router` | 58.0.31 | Rutas por archivo y navegación inferior. |
| `react-native-safe-area-context` | 5.11.1 | Integración con las áreas seguras de navegación. |
| `react-native-screens` | 4.30.1 | Soporte de pantallas para navegación nativa. |
| `expo-linking` | 58.0.17 | Dependencia del taller disponible para enlaces y esquemas. |
| `expo-constants` | 58.0.16 | Dependencia del taller para configuración de Expo. |
| `expo-status-bar` | 58.0.5 | Control de barra de estado desde el layout. |
| `@expo/vector-icons` | 15.1.1 | Iconos Ionicons ya usados por navegación, botones y tarjetas. |

La guía de librerías se conserva en `referencias_librerias.md`, con documentación oficial de Expo, npm y repositorios mantenidos por sus autores. No se modificó el lockfile en la revisión final.

## 7. Análisis de requisitos y decisiones finales

| Requisito | Implementación | Resultado verificado |
|---|---|---|
| Exactamente cuatro pestañas | `_layout.tsx`: Inicio, Estudios, Experiencia, Hobbies | Chromium mostró 4/4. |
| Árbol solicitado | Cinco archivos de rutas y cuatro componentes | Inventario de `src` confirmado: nueve archivos. |
| Estudios en curso | `TarjetaEstudio.tsx` | Fondo diferenciado e insignia morada. |
| Contacto y perfiles reales | `MiBoton.tsx` e `index.tsx` | href presentes, destinos comprobados. |
| Hobbies actuales | `hobbies.tsx` y `TarjetaHobby.tsx` | Cinco tarjetas —Lectura, Deporte, Programación, Escuchar música y Fútbol— con iconos y despliegue inline. |
| Dos playlists | Enlaces exactos suministrados por el usuario | Apertura en pestaña nueva y HEAD HTTP 200. |
| Sin referencias al origen de datos | Texto de la interfaz | Búsqueda estática en `src` y revisión en Chromium sin menciones a CV/currículum. |
| Linux e iconos | Estilos y nombres de Ionicons del proyecto | Paleta mantenida; glifos correspondientes sin sustitución. |
| Git | Rama local `main` con historial base conservado | 18 commits locales; remoto no reescrito ni actualizado. |

La inspección del historial encontró código demostrativo propio del starter Expo en commits iniciales. Se retiró del `src` actual cuando no era necesario, pero se conservó el historial base. No se reescribieron commits remotos o preexistentes: esa operación modifica historia compartida y requiere aprobación expresa. El inventario y justificación de cada eliminación están en `../evidencias/archivos_eliminados.txt`.

## 8. Estructura final de `src` y limpieza

El árbol final coincide, archivo por archivo, con la estructura requerida:

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

No existen carpetas adicionales en `src`. Se retiraron: `src/app/explore.tsx`; `src/components/animated-icon.module.css`, `animated-icon.tsx`, `animated-icon.web.tsx`, `app-tabs.tsx`, `app-tabs.web.tsx`, `external-link.tsx`, `hint-row.tsx`, `themed-text.tsx`, `themed-view.tsx`, `ui/collapsible.tsx` y `web-badge.tsx`; `src/constants/theme.ts`; `src/global.css`; `src/hooks/use-color-scheme.ts`, `use-color-scheme.web.ts` y `use-theme.ts`; y `src/utils/mostrarAlerta.ts`.

Los componentes de animación, pestañas de ejemplo, enlaces externos, hints, tema y Explore pertenecían al starter y no eran importados desde las pantallas finales. `mostrarAlerta.ts` era un helper incorporado durante una versión anterior de esta entrega; se retiró porque la instrucción final reemplaza las alertas de hobbies por despliegue inline y la estructura exigida no incluye `src/utils/`. Tras el retiro, TypeScript y las dos exportaciones pasaron. No se borraron configuraciones, assets, scripts del proyecto ni las dependencias de la guía.

## 9. Arquitectura y responsabilidades

`src/app/_layout.tsx` registra las cuatro pestañas con Expo Router y los iconos de Ionicons; también aplica los colores de barra y `StatusBar`. `index.tsx` organiza perfil, tecnologías, Contacto y Perfiles. `estudios.tsx` presenta las tarjetas académicas. `experiencia.tsx` describe el proyecto formativo. `hobbies.tsx` contiene cinco instancias de `TarjetaHobby`, cada una con su icono correspondiente.

`MiBoton.tsx` es un enlace reutilizable: en Web renderiza un anchor semántico con el `href` real; en Android/iOS utiliza `Link` y `Pressable` de Expo Router. `TarjetaHobby.tsx` mantiene el estado expandido, anima opacidad/desplazamiento y muestra el texto y los enlaces en el flujo del documento. En Web, las playlists usan anchors con `target="_blank"` y `rel="noopener noreferrer"`; en móvil se utiliza `Link` de Expo Router. `TarjetaEstudio.tsx` mantiene el estilo condicional basado en `enCurso`; `TarjetaExperiencia.tsx` se conserva para presentar el proyecto.

## 10. Proceso paso a paso

1. Se releen la guía, el proyecto base, el CV y el encargo adicional para fijar requisitos y destinos literales.
2. Se compararon los nueve archivos requeridos con el árbol de trabajo y se revisaron los imports antes de eliminar archivos.
3. Se retiró la ruta de ejemplo Explore y el código de starter no usado. Se mantuvieron `package.json`, lockfile, assets y configuración.
4. Se integraron correo, teléfono, LinkedIn y GitHub como enlaces reales y separados en Contacto/Perfiles.
5. Se restauraron Lectura, Deporte y Programación desde el ZIP original y se conservaron las tarjetas nuevas de Música y Fútbol.
6. Se asignó un icono a cada una de las cinco tarjetas, manteniendo `book-outline`, `football-outline` y `code-slash-outline` de las tarjetas anteriores y añadiendo `musical-notes-outline` a Música.
7. Se mantuvieron los dos botones de Spotify dentro del panel inline de Música y Fútbol como hobby independiente.
8. Se quitaron referencias a procedencia del perfil y se mantuvo Huellitas Saludables como proyecto académico.
9. Se ejecutaron TypeScript, exportaciones de plataforma y el proyecto en Chromium. Se verificaron las cinco expansiones, los iconos y los destinos externos.
10. Se generaron capturas reales en móvil/escritorio, se actualizó la documentación y se guardó un commit local descriptivo sin reescribir historia previa.

## 11. Personalización Linux e iconos

Se conserva la apariencia oscura inspirada en Ubuntu/Linux: fondo `#171D26`, superficies `#222B36`, bordes `#394554`, texto claro, acento naranja `#E95420` y tonos morados en cápsulas y botones. Las pantallas limitan su ancho en escritorio y se ajustan al espacio en móvil. El despliegue de las tarjetas se mantiene dentro de su contenedor.

Se conservan los iconos de navegación `person-outline`, `school-outline`, `briefcase-outline`, `heart-outline` y de Contacto/Perfiles `mail-outline`, `call-outline`, `logo-linkedin`, `logo-github`. Las actividades del proyecto original mantienen `book-outline` (Lectura), `football-outline` (Deporte) y `code-slash-outline` (Programación). Fútbol conserva `football-outline`; Música tiene `musical-notes-outline`. Por tanto, cada uno de los cinco hobbies muestra un icono Ionicons.

## 12. Información de perfil y contenidos

La pantalla principal presenta a Jorge Alejandro Torres Páez, aprendiz ADSO, tecnologías de desarrollo y objetivo profesional. Contacto usa `mailto:joretopa7@gmail.com` y `tel:+573115236763`; Perfiles enlaza a `https://linkedin.com/in/jorge-torres-paez-120198417` y `https://github.com/joretopa7-stack`.

Huellitas Saludables se describe como proyecto académico para una clínica veterinaria; no se presenta como empleo. Hobbies presenta Lectura, Deporte, Programación, “Escuchar música” y “Fútbol”. Las primeras tres actividades y sus iconos corresponden a las tarjetas del proyecto base. La descripción musical menciona música urbana cristiana y música romántica cristiana. Las etiquetas y direcciones de Spotify son exactamente las entregadas: “Urban Christian” (`https://open.spotify.com/playlist/75UN9lrSGbkYl8JHf2ojvO?si=GcqoFYs9QxeII7e8yxclOw`) y “Románticas cristianas” (`https://open.spotify.com/playlist/7tgriHVMSbBuihjWC6Ccol?si=eCMerDimRWqmpKmGrRZZjQ`). No se añadieron otros gustos.

## 13. Historial de commits y publicación

Se conservó el historial base de 11 commits. La revisión previa tenía seis commits locales de entrega y se agregó `994537a`, que restaura Lectura, Deporte y Programación, conserva Música y Fútbol y exige icono en cada tarjeta. La rama local final tiene 18 commits (11 base + 7 de entrega) y queda siete commits adelante de `origin/main`.

| SHA | Fecha | Mensaje |
|---|---|---|
| `068734b` | 2026-11-11 | `Initial commit` |
| `d5b31b9` | 2026-11-11 | `chore: crear estructura inicial del proyecto` |
| `d552138` | 2026-11-12 | `feat: crear TarjetaEstudio con la propiedad enCurso` |
| `49a899d` | 2026-11-12 | `feat: agregar cápsula de estudio en curso` |
| `0c5d7a8` | 2026-11-12 | `feat: configurar cuatro pestañas con iconos` |
| `7977372` | 2026-11-12 | `feat: construir pantalla de datos personales` |
| `8d67002` | 2026-11-12 | `feat: agregar MiBoton para acciones de contacto` |
| `1dca585` | 2026-11-12 | `feat: mostrar tres tarjetas de formación académica` |
| `5f4f23e` | 2026-11-12 | `feat: construir tarjetas de experiencia laboral` |
| `9fab0b2` | 2026-11-12 | `feat: construir tarjetas de hobbies` |
| `52c6fad` | 2026-11-12 | `estructura base funcional falta personalizar` |
| `82a6580` | 2026-11-15 | `feat: personalizar hoja de vida ADSO y navegación` |
| `80d2431` | 2026-11-15 | `docs: documentar dependencias y ejecución del proyecto` |
| `3a10698` | 2026-11-15 | `docs: actualizar validaciones y estado del repositorio` |
| `dfc4776` | 2026-11-15 | `chore: limpiar comentarios resueltos del layout` |
| `aca1fa9` | 2026-11-15 | `docs: corregir conteo del historial Git` |
| `4b6be3e` | 2026-11-15 | `fix: alinear estructura, enlaces e intereses con la guía` |
| `994537a` | 2026-11-15 | `feat: restaurar hobbies previos con iconos` |

El remoto configurado es [joretopa7-stack/Expo-taller_Reactnative](https://github.com/joretopa7-stack/Expo-taller_Reactnative). No se hizo push: no había un conector GitHub autorizado disponible. No se reescribió ni forzó el historial base, de acuerdo con la precaución explícita del usuario. El log y estado de rama ejecutados están en `../evidencias/historial_git_final.txt`.

## 14. Evidencias fotográficas y técnicas

Las imágenes de aplicación son capturas de Chromium con Playwright, tomadas directamente del servidor Expo Web en móvil (430 × 932 px) y escritorio (1365 × 900 px). La captura 01 corresponde al antes conservado; las 03–05 documentan las cinco tarjetas, los iconos y los paneles de Música y Fútbol. Las capturas 10–15 muestran inventario, Git, pruebas, enlaces, código y configuración reales servidos desde la carpeta entregada.

Para facilitar la lectura en Word/PDF, las figuras técnicas 10–15 usan copias que solo recortan márgenes blancos; no se cambió ni anotó su contenido. Los PNG originales completos se conservan en `../evidencias/`, y las copias recortadas están en `../evidencias/recortes_informe/`.

![Intereses antes de la corrección](/home/ubuntu/entrega_ADSO/evidencias/01_intereses_antes.png)

*Figura 1. Estado anterior: tarjetas de intereses previas a la corrección; se conserva como comparación.*

![Inicio móvil](/home/ubuntu/entrega_ADSO/evidencias/02_inicio_movil.png)

*Figura 2. Pantalla de Inicio con perfil y navegación inferior.*

![Intereses cerrados](/home/ubuntu/entrega_ADSO/evidencias/03_intereses_cerrado_movil.png)

*Figura 3. Estado final con las cinco tarjetas: Lectura, Deporte, Programación, Escuchar música y Fútbol; cada una tiene icono.*

![Música expandida con playlists](/home/ubuntu/entrega_ADSO/evidencias/04_musica_expandida_movil.png)

*Figura 4. Descripción musical y los botones “Urban Christian” y “Románticas cristianas” integrados inline.*

![Fútbol expandido](/home/ubuntu/entrega_ADSO/evidencias/05_futbol_expandido_movil.png)

*Figura 5. Fútbol como hobby independiente con información desplegada dentro de la tarjeta.*

![Contacto y Perfiles](/home/ubuntu/entrega_ADSO/evidencias/06_contacto_perfiles_movil.png)

*Figura 6. Captura desplazada hasta Contacto y Perfiles, con correo, teléfono, LinkedIn y GitHub visibles.*

![Intereses en escritorio](/home/ubuntu/entrega_ADSO/evidencias/07_intereses_escritorio.png)

*Figura 7. Adaptación de la pantalla de intereses a viewport escritorio.*

![Experiencia móvil](/home/ubuntu/entrega_ADSO/evidencias/08_experiencia_movil.png)

*Figura 8. Proyecto Huellitas Saludables identificado como proyecto académico.*

![Estudios móvil](/home/ubuntu/entrega_ADSO/evidencias/09_estudios_movil.png)

*Figura 9. Formación académica y distintivos “En Curso”.*

![Estructura final de src](/home/ubuntu/entrega_ADSO/evidencias/10_estructura_src.png)

*Figura 10. Inventario real de los cinco archivos de app y cuatro componentes de `src/`.*

![Historial final Git](/home/ubuntu/entrega_ADSO/evidencias/11_git_log.png)

*Figura 11. Historial local de 18 commits y rama siete commits adelante de `origin/main`; no representa un push.*

![Resultados Chromium](/home/ubuntu/entrega_ADSO/evidencias/12_pruebas_chromium.png)

*Figura 12. Registro de pruebas del navegador y límites declarados.*

![Enlaces verificados](/home/ubuntu/entrega_ADSO/evidencias/13_enlaces_funcionales.png)

*Figura 13. Registro individual de destinos, aperturas en pestaña nueva y estados HTTP.*

![Código final de hobbies](/home/ubuntu/entrega_ADSO/evidencias/14_codigo_hobbies.png)

*Figura 14. Código actual de `hobbies.tsx`: cinco actividades con iconos y las dos URL exactas de Spotify.*

![Configuración Expo](/home/ubuntu/entrega_ADSO/evidencias/15_configuracion_expo.png)

*Figura 15. Configuración Expo real; el nombre visible es “Jorge Torres”.*

La lista de archivos retirados, la matriz de enlaces, la prueba Chromium y las validaciones detalladas se encuentran en `../evidencias/archivos_eliminados.txt`, `../evidencias/enlaces_funcionales.txt`, `../evidencias/pruebas_chromium.txt` y `validaciones.txt`.

## 15. Ejecución del aplicativo

El servidor Expo Web usado para revisar la app responde en el puerto 8085 con HTTP 200. La vista previa disponible en esta sesión es [Abrir la aplicación](https://8085-ik6wnhu3j6ikvura3l2wt-ecb3fb1f.us5.manus.computer/).

Para reproducirla desde la carpeta del proyecto:

```bash
cd ExpoApp
npm ci
npx expo start --web
```

Para probar Expo Go en un teléfono: `npx expo start`, escanear el QR y abrirlo en el dispositivo conectado a la misma red. Esa prueba física no se realizó durante la sesión.

## 16. Pruebas realizadas y tabla final de cumplimiento

| Comprobación / requisito | Resultado | Evidencia | Estado |
|---|---|---|---|
| `npx tsc --noEmit` | Terminó sin diagnósticos. | Registro `validaciones.txt`. | Verificado |
| Exportación Web | `Exported: dist`. | Log de validación. | Verificado |
| Bundle Android | `Exported: /tmp/ExpoApp_android_five_hobbies` con `--no-bytecode`; no se creó APK/AAB. | Log de validación. | Verificado como bundle JS |
| Servidor de preview | HTTP 200 en `localhost:8085`. | Registro y vista Chromium. | Verificado |
| Navegación | 4/4 pestañas presentes. | `pruebas_chromium.txt`. | Verificado |
| Estructura `src` | 9 archivos exactos, dos carpetas. | `estructura_src_final.txt`, figura 10. | Verificado |
| Contacto/Perfiles | hrefs exactos; LinkedIn y GitHub abren nueva pestaña. | `enlaces_funcionales.txt`, figura 13. | Verificado en Web |
| Spotify | Dos hrefs exactos; cada clic produjo nueva pestaña. | `enlaces_funcionales.txt`, figuras 4 y 13. | Verificado en Web |
| Accesibilidad HTTP externa | LinkedIn, GitHub y ambas playlists respondieron HEAD HTTP 200. | `enlaces_funcionales.txt`. | Verificado al 15-11-2026 |
| Intereses/Hobbies | Cinco tarjetas —Lectura, Deporte, Programación, Música y Fútbol—, cada una con icono; todas expanden inline, sin diálogos. | Figuras 3–5; cero errores JS. | Verificado en Chromium |
| Texto CV en UI | Búsqueda en `src` sin referencias a CV/currículum. | Comando en `validaciones.txt`. | Verificado |
| Iconos | Cada hobby tiene Ionicon: `book-outline`, `football-outline`, `code-slash-outline`, `musical-notes-outline` y `football-outline`; navegación/contacto conservan sus nombres previos. | Código, capturas y comparación con ZIP. | Verificado |
| Expo Go en dispositivo | No ejecutado en hardware/emulador. | Límite registrado. | Pendiente |
| Push a GitHub | Remoto no actualizado. | `historial_git_final.txt`. | Pendiente de conector/autorización |

Los clics externos en Playwright se probaron capturando el popup y comparando la URL exacta; la solicitud de esa prueba se interceptó para no cargar terceros. La accesibilidad de cada perfil y playlist se verificó además por solicitudes HEAD reales, todas con HTTP 200. Para correo y teléfono se verificaron los anchors `mailto:` y `tel:`; su handler requiere un dispositivo con una app asociada.

## 17. Problemas encontrados y soluciones

| Problema | Solución aplicada y resultado |
|---|---|
| Una revisión anterior había dejado solo Música y Fútbol y retirado las tarjetas previas. | Por la última indicación del usuario se restauraron Lectura, Deporte y Programación, manteniendo Música y Fútbol; todas tienen icono y despliegue inline. Chromium confirmó las cinco interacciones y cero diálogos. |
| Botones de contacto/perfiles solo aparentaban ser funcionales en versiones anteriores. | Se cambió la API reutilizable a href real: `mailto:`, `tel:` o URL externa; enlaces web abren pestaña nueva con protección `noopener noreferrer`. |
| Hacía falta incorporar dos playlists y comprobarlas individualmente. | Se usaron exactamente las dos URL recibidas; prueba de click/popup y comprobación HTTP 200 para ambas. |
| `src/` contenía Explore, tema y componentes de ejemplo ajenos al árbol requerido. | Se revisaron imports y se eliminaron archivos no usados; quedaron solo las cinco rutas y cuatro componentes indicados. |
| Una utilidad de alertas añadida durante una revisión previa ya no correspondía a la interacción final. | Se retiró `src/utils/mostrarAlerta.ts`; la estructura queda exacta y no se mantiene código sin uso. |
| La interfaz necesitaba mostrar un icono en cada hobby. | Se preservaron los iconos originales de Lectura, Deporte y Programación, además del de Fútbol, y se asignó `musical-notes-outline` a Música. Se comprobó el renderizado de los cinco iconos Ionicons. |
| La exportación Android con bytecode Hermes no funcionaba en la arquitectura del entorno. | Se utilizó `--no-bytecode` y se generó el bundle JavaScript; no se afirma que se generó APK/AAB. |
| La bitácora anterior contenía estado previo de tres intereses, alertas y estructura de starter. | Se actualizó esta bitácora con la estructura, contenidos y resultados finales, más el registro de archivos retirados y las nuevas capturas. |
| El historial ya tenía commits en la rama base y el remoto no podía actualizarse desde esta sesión. | Se conservaron todos los commits previos y se agregó un commit local descriptivo para la restauración de hobbies. No se forzó ni reescribió el remoto; `main` está siete commits adelante. |

## 18. Resultado final y límites

Se entrega una app Expo del proyecto existente con las cuatro pestañas pedidas; `src/` tiene exactamente los nueve archivos del árbol de la guía. Hobbies presenta Lectura, Deporte, Programación, Escuchar música y Fútbol; cada tarjeta tiene icono y se expande inline. Música conserva las dos playlists exactas. Contacto y Perfiles usan anchors con destinos reales; los enlaces web se abren en pestaña nueva. La información visible se presenta naturalmente, sin comentarios sobre procedencia. Se conservaron los iconos originales de las tarjetas previas y el diseño Linux/Ubuntu.

La rama local contiene 18 commits verificables (11 base + 7 de entrega). El paquete final lleva el historial `.git`, README actualizado, bitácora Markdown/DOCX/PDF, tabla de cumplimiento, validaciones y 15 capturas reales. No se publicó el remoto ni se reescribió la historia preexistente.

**Pendientes explícitos:** ejecutar la app en un teléfono/emulador con Expo Go y probar allí los manejadores nativos de correo y teléfono. Publicar la rama local requiere habilitar el conector GitHub y autorizar un push normal. La exportación Android fue un bundle JS, no APK/AAB.

## 19. Conclusiones

La revisión respondió al encargo sin empezar de cero: se trabajó sobre el proyecto entregado, se confirmó la estructura exacta, se retiraron los archivos de starter que no se usan y se mantuvieron configuración y dependencias. Las tarjetas originales de Lectura, Deporte y Programación conviven con Música y Fútbol; las cinco muestran icono y despliegan su contenido en el flujo de la página. Los cuatro enlaces de perfil/contacto tienen un destino verificable y las dos playlists abren en nuevas pestañas.

La aplicación pasó TypeScript, exportación web, exportación Android JavaScript y comprobaciones de interacción en Chromium, tanto móvil como escritorio. Las capturas y registros distinguen claramente lo verificado de lo pendiente. Se conserva el historial base por seguridad: las revisiones históricas se mantienen y las correcciones quedan añadidas como commits locales, sin alterar el remoto.
