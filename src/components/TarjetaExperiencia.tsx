//Componente Reutilizable
import { StyleSheet, Text, View } from "react-native";

type Props = {
  empresa: string;
  cargo: string;
  periodo: string;
  descripcion: string;
};

export default function TarjetaExperiencia({
  empresa,
  cargo,
  periodo,
  descripcion,
}: Props) {
  return (
    <View style={styles.tarjeta}>
      <Text style={styles.empresa}>{empresa}</Text>
      <Text style={styles.cargo}>{cargo}</Text>
      <Text style={styles.periodo}>{periodo}</Text>
      <Text style={styles.descripcion}>{descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#FFFFFF",
    borderColor: "#CBD5E1",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginVertical: 7,
  },
  empresa: {
    color: "#1E293B",
    fontSize: 17,
    fontWeight: "bold",
  },
  cargo: {
    color: "#6D28D9",
    fontSize: 15,
    marginTop: 5,
  },
  periodo: {
    color: "#64748B",
    marginTop: 4,
  },
  descripcion: {
    color: "#334155",
    marginTop: 9,
    lineHeight: 21,
  },
});
