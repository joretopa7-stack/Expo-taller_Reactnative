//Componente Reutilizable
import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { mostrarAlerta } from "../utils/mostrarAlerta";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  titulo: string;
  detalle: string;
  icono: NombreIcono;
};

export default function TarjetaHobby({ titulo, detalle, icono }: Props) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={`${titulo}. Toca para ver detalles.`}
      style={({ pressed }) => [styles.tarjeta, pressed && styles.presionada]}
      onPress={() => mostrarAlerta(titulo, detalle)}
    >
      <Ionicons name={icono} size={28} color="#E95420" />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.instruccion}>Toca para ver más</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginVertical: 7,
    alignItems: "center",
  },
  presionada: {
    borderColor: "#E95420",
    opacity: 0.86,
  },
  titulo: {
    color: "#F4F6F8",
    fontWeight: "700",
    fontSize: 17,
    marginTop: 8,
  },
  instruccion: {
    color: "#AAB4C0",
    marginTop: 5,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL
