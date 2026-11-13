//Pantalla 2: Formación Académica
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Formación académica</Text>

      <TarjetaEstudio
        institucion="SENA"
        programa="Análisis y Desarrollo de Software"
        periodo="En curso"
        enCurso={true}
      />

      <TarjetaEstudio
        institucion="Nombre de institución"
        programa="Nombre del programa"
        periodo="2022 - 2023"
        enCurso={false}
      />

      <TarjetaEstudio
        institucion="Nombre de institución"
        programa="Nombre del programa"
        periodo="2020 - 2021"
        enCurso={false}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contenido: {
    padding: 20,
    backgroundColor: "#F8FAFC",
    flexGrow: 1,
  },
  titulo: {
    color: "#1E293B",
    fontSize: 23,
    fontWeight: "bold",
    marginBottom: 12,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL