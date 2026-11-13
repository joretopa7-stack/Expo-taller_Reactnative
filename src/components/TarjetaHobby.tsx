//Componente Reutilizable
import { Alert, Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  titulo: string;
  detalle: string;
  icono: NombreIcono;
};

export default function TarjetaHobby({ titulo, detalle, icono }: Props) {
  return (
    <Pressable
      style={styles.tarjeta}
      onPress={() => Alert.alert(titulo, detalle)}
    >
      <Ionicons name={icono} size={28} color="#6D28D9" />
      <Text style={styles.titulo}>{titulo}</Text>
      <Text style={styles.instruccion}>Toca para ver más</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CBD5E1",
    borderWidth: 1,
    borderRadius: 14,
    padding: 18,
    marginVertical: 7,
    alignItems: "center",
  },
  titulo: {
    color: "#1E293B",
    fontWeight: "bold",
    fontSize: 17,
    marginTop: 8,
  },
  instruccion: {
    color: "#64748B",
    marginTop: 4,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL