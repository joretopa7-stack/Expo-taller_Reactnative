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
  return (
    <View
      style={[
        styles.tarjeta,
        enCurso ? styles.enCurso : styles.finalizado,
      ]}
    >
      <View style={styles.filaTitulo}>
        <Text style={styles.titulo}>{programa}</Text>
        {enCurso && (
          <View style={styles.badge}>
            <Text style={styles.badgeTexto}>En Curso</Text>
          </View>
        )}
      </View>

      <Text style={styles.subtitulo}>{institucion}</Text>
      <Text style={styles.anio}>{periodo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    padding: 16,
    borderRadius: 12,
    marginVertical: 7,
    borderWidth: 1,
  },
  finalizado: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
  },
  enCurso: {
    backgroundColor: "#30243A",
    borderColor: "#8A5AA0",
  },
  filaTitulo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: 10,
  },
  titulo: {
    color: "#F4F6F8",
    fontSize: 16,
    fontWeight: "700",
    flex: 1,
  },
  subtitulo: {
    fontSize: 14,
    color: "#C5CDD6",
    marginTop: 8,
  },
  anio: {
    fontSize: 12,
    color: "#AAB4C0",
    marginTop: 6,
  },
  badge: {
    backgroundColor: "#77216F",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    alignSelf: "flex-start",
  },
  badgeTexto: {
    color: "#FFFFFF",
    fontWeight: "700",
    fontSize: 11,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL
