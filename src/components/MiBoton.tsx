//Componente Reutilizable

import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  titulo: string;
  icono: NombreIcono;
  onPress: () => void;
};

export default function MiBoton({ titulo, icono, onPress }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
    >
      <Ionicons name={icono} size={20} color="#FFFFFF" />
      <Text style={styles.texto}>{titulo}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#77216F",
    borderColor: "#9B4B91",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  presionado: {
    opacity: 0.76,
    transform: [{ scale: 0.99 }],
  },
  texto: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL
