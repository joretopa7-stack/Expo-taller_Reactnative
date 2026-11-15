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
      <View style={styles.acento} />
      <View style={styles.contenido}>
        <Text style={styles.empresa}>{empresa}</Text>
        <Text style={styles.cargo}>{cargo}</Text>
        <Text style={styles.periodo}>{periodo}</Text>
        <Text style={styles.descripcion}>{descripcion}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginVertical: 8,
    flexDirection: "row",
    overflow: "hidden",
  },
  acento: {
    width: 4,
    backgroundColor: "#E95420",
  },
  contenido: {
    padding: 16,
    flex: 1,
  },
  empresa: {
    color: "#F4F6F8",
    fontSize: 17,
    fontWeight: "700",
  },
  cargo: {
    color: "#E7A58D",
    fontSize: 15,
    marginTop: 5,
  },
  periodo: {
    color: "#AAB4C0",
    marginTop: 4,
  },
  descripcion: {
    color: "#D3D9E0",
    marginTop: 9,
    lineHeight: 21,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL
