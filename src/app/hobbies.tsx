// Pantalla 4: intereses de aprendizaje documentados en el CV.
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Intereses y aprendizaje</Text>
      <Text style={styles.introduccion}>
        El CV no enumera hobbies personales. Estas tarjetas muestran áreas de
        interés técnico y formación que sí aparecen en el documento.
      </Text>

      <TarjetaHobby
        titulo="Desarrollo de aplicaciones"
        detalle="El CV documenta formación y conocimientos en React, TypeScript, Node.js, Express y PostgreSQL, además del proyecto académico Huellitas Saludables."
        icono="code-slash-outline"
      />
      <TarjetaHobby
        titulo="Trabajo en equipo"
        detalle="El CV incluye trabajo en equipo y comunicación efectiva entre las competencias personales."
        icono="football-outline"
      />
      <TarjetaHobby
        titulo="Aprendizaje continuo"
        detalle="El perfil destaca aprendizaje autónomo y formación de inglés en Open English, actualmente en curso."
        icono="book-outline"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: "#171D26" },
  contenido: { padding: 18, paddingBottom: 30, flexGrow: 1, width: "100%", maxWidth: 760, alignSelf: "center" },
  titulo: { color: "#F4F6F8", fontSize: 23, fontWeight: "800" },
  introduccion: { color: "#AAB4C0", fontSize: 14, lineHeight: 21, marginTop: 6, marginBottom: 12 },
});
