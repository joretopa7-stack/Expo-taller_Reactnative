# Tabla final de cumplimiento — guía y correcciones

| Requisito | Resultado | Evidencia | Estado |
|---|---|---|---|
| Estructura del proyecto | 5 rutas y 4 componentes; no quedan archivos extra bajo `src`. | `../evidencias/estructura_src_final.txt`, captura `10_estructura_src.png`. | Verificado |
| 4 pestañas e iconos | Inicio, Estudios, Experiencia y Hobbies en navegación inferior. | Capturas `02`, `03` y `07`; registro Chromium. | Verificado |
| Estudios y estado “En Curso” | Formación activa con color distintivo e insignia morada. | Captura `09_estudios_movil.png`. | Verificado |
| Experiencia/proyecto | Huellitas Saludables se identifica como proyecto académico. | Captura `08_experiencia_movil.png`. | Verificado |
| Despliegue de intereses | Los cinco hobbies expanden dentro de la página, sin modal ni alerta. | Capturas `03`–`05`, prueba Chromium final. | Verificado |
| Contacto | `mailto:` y `tel:` reales. | `../evidencias/enlaces_funcionales.txt`, captura `06_contacto_perfiles_movil.png`. | Verificado en DOM; el handler de dispositivo no se ejecutó |
| Perfiles | LinkedIn/GitHub con los destinos, `target=_blank` y `rel=noopener noreferrer`. | Clic/popup y HEAD real en `../evidencias/enlaces_funcionales.txt`. | Verificado; HTTP 200 |
| Hobbies | Lectura, Deporte, Programación, Escuchar música y Fútbol; cada tarjeta tiene icono. | Capturas `03`–`05`; código `14_codigo_hobbies.png`. | Verificado |
| Playlists | Las dos URL suministradas; botones y pestañas nuevas dentro de Música. | Captura `04`, captura `13` y registro de enlaces. | Verificado; HTTP 200 |
| Iconos | Se preservan `book-outline`, `football-outline` y `code-slash-outline` de las tarjetas anteriores y el icono original de fútbol; Música usa `musical-notes-outline`. | Código fuente, comparación con ZIP base e imágenes UI. | Verificado |
| Texto de interfaz | No hay menciones visibles al CV ni notas sobre procedencia de datos. | Búsqueda estática en `src` y Chromium. | Verificado |
| Documentación | README, bitácora DOCX/PDF/Markdown, tabla y resultados actualizados. | `../README_entrega.md` y esta carpeta. | Verificado |
| Git | 11 commits base + 7 locales de entrega = 18; no se reescribió remoto. | `../evidencias/historial_git_final.txt`, captura `11_git_log.png`. | Verificado localmente; push pendiente |
| Ejecución | TypeScript, export Web, bundle Android JS y Chromium. | `validaciones.txt`, capturas `12`–`13`. | Verificado en el entorno |
| Expo Go físico | No ejecutado en teléfono/emulador. | Limitación declarada en `validaciones.txt`. | Pendiente |

La última indicación amplía la sección Hobbies: se restauran las tres tarjetas del proyecto base y se mantienen Música y Fútbol. Todas usan expansión inline e icono visible; las playlists siguen dentro de la tarjeta musical. La instrucción de no mostrar datos sobre su procedencia se mantiene.