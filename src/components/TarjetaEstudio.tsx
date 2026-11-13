import { StyleSheet, Text, View } from "react-native";

type Props = {
  institucion: string;
  programa: string;
  periodo: string;
  enCurso: boolean;
};

export default function TarjetaEstudio({
  institucion,
  programa,
  periodo,
  enCurso,
}: Props) {
  // PISTA: Aplica un estilo condicional si enCurso es verdadero
  return (
    <View
      style={[
        styles.tarjeta,
        enCurso ? styles.enCurso : styles.finalizado,
      ]}
    >
      <Text style={styles.titulo}>{programa}</Text>

      {/* PISTA: Si está en curso, muestra un texto indicativo */}
      {enCurso && <Text style={styles.badge}>En Curso</Text>}

      <Text style={styles.subtitulo}>{institucion}</Text>
      <Text style={styles.anio}>{periodo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#ffffff",
    borderColor: "#ccc",
  },
  enCurso: {
    backgroundColor: "#eef2ff",
    borderColor: "#6366f1",
  }, // ¡otro color!
  titulo: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 14,
    color: "#555",
  },
  anio: {
    fontSize: 12,
    color: "#888",
  },
  badge: {
    color: "#6366f1",
    fontWeight: "bold",
    fontSize: 12,
  },
});
