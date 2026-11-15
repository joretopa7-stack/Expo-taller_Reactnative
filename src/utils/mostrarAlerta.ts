import { Alert, Platform } from "react-native";

/** Muestra una alerta nativa en iOS/Android y una equivalente en el navegador. */
export function mostrarAlerta(titulo: string, mensaje: string) {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    window.alert(`${titulo}\n\n${mensaje}`);
    return;
  }

  Alert.alert(titulo, mensaje);
}
