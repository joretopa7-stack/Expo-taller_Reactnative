//Pantalla 4: Intereses / Hobbies
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Intereses y hobbies</Text>

      <TarjetaHobby
        titulo="Lectura"
        detalle="Me gusta leer sobre tecnología y desarrollo personal."
        icono="book-outline"
      />

      <TarjetaHobby
        titulo="Deporte"
        detalle="Practico deporte para mantenerme activo."
        icono="football-outline"
      />

      <TarjetaHobby
        titulo="Programación"
        detalle="Me interesa crear aplicaciones y aprender nuevas herramientas."
        icono="code-slash-outline"
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
