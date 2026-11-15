# Fuentes oficiales de dependencias Expo

Versiones resueltas por `package-lock.json` (distintas de los rangos semver declarados en `package.json`): `expo-router` 58.0.31; `react-native-safe-area-context` 5.11.1; `react-native-screens` 4.30.1; `expo-linking` 58.0.17; `expo-constants` 58.0.16; `expo-status-bar` 58.0.5; `@expo/vector-icons` 15.1.1.

## Hallazgos contrastados con la documentación y el código final

- **`expo-router`:** proporciona enrutamiento por archivos, layouts, pestañas y enlaces. El proyecto usa `Tabs` en `src/app/_layout.tsx` y `Link` para enlaces externos nativos; en Web, los controles externos renderizan anchors para establecer explícitamente `target` y `rel`. Fuentes [1] y [2].
- **`react-native-safe-area-context`:** expone insets y componentes para áreas seguras. Está instalado conforme al taller; las rutas no importan directamente su API y la navegación se mantiene con Expo Router. Fuentes [3] y [4].
- **`react-native-screens`:** integra primitivas de pantalla nativas con navegadores de React Navigation; no crea por sí mismo el contenido de las pestañas. Está presente en las dependencias instaladas. Fuentes [5] y [6].
- **`expo-linking`:** biblioteca de Expo para crear, analizar y gestionar URLs y deep links. Se conserva como dependencia requerida por el taller; el código de botones utiliza `mailto:`/`tel:` en hrefs y Expo Router/anchors para navegar, sin invocar directamente `expo-linking` desde estas cuatro pantallas. Fuentes [7] y [8].
- **`expo-constants`:** da acceso a valores estáticos de configuración de Expo y de la app. Se conserva por requisito del taller; las pantallas de este perfil estático no lo importan directamente. Fuentes [9] y [10].
- **`expo-status-bar`:** ofrece el componente para controlar la barra de estado; se importa en `src/app/_layout.tsx` para mantener contraste con el fondo oscuro. Fuentes [11] y [12].
- **`@expo/vector-icons`:** distribuye familias de iconos, entre ellas Ionicons. Se usa en navegación, botones y tarjetas; se mantiene porque lo exige la guía y ya pertenece al proyecto entregado. Fuentes [13] y [14].

## Referencias

[1]: https://docs.expo.dev/router/basics/navigation-layouts/ "Navigation layouts in Expo Router — Expo Documentation"
[2]: https://www.npmjs.com/package/expo-router/v/58.0.31 "expo-router 58.0.31 — npm"
[3]: https://docs.expo.dev/versions/latest/sdk/safe-area-context/ "react-native-safe-area-context — Expo Documentation"
[4]: https://github.com/appandflow/react-native-safe-area-context "appandflow/react-native-safe-area-context — repositorio mantenido del proyecto"
[5]: https://docs.expo.dev/versions/latest/sdk/screens/ "react-native-screens — Expo Documentation"
[6]: https://github.com/software-mansion/react-native-screens/blob/main/README.md "react-native-screens — repositorio del proyecto"
[7]: https://docs.expo.dev/versions/latest/sdk/linking/ "Expo Linking — documentación oficial"
[8]: https://www.npmjs.com/package/expo-linking "expo-linking — npm"
[9]: https://docs.expo.dev/versions/latest/sdk/constants/ "Expo Constants — documentación oficial"
[10]: https://www.npmjs.com/package/expo-constants "expo-constants — npm"
[11]: https://docs.expo.dev/versions/latest/sdk/status-bar/ "Expo StatusBar — documentación oficial"
[12]: https://github.com/expo/expo/tree/sdk-58/packages/expo-status-bar "expo-status-bar — repositorio Expo SDK 58"
[13]: https://docs.expo.dev/guides/icons/ "Expo Vector Icons — documentación oficial"
[14]: https://www.npmjs.com/package/@expo/vector-icons "@expo/vector-icons — npm"
