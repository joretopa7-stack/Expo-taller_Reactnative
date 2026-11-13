//Pantalla 3: Experiencia Laboral
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Experiencia laboral</Text>

      <TarjetaExperiencia
        empresa="Nombre de empresa"
        cargo="Cargo desempeñado"
        periodo="2023 - 2024"
        descripcion="Describe aquí las funciones o actividades realizadas."
      />

      <TarjetaExperiencia
        empresa="Otra empresa"
        cargo="Otro cargo"
        periodo="2022 - 2023"
        descripcion="Agrega una breve descripción de esta experiencia."
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