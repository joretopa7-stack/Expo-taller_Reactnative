// Pantalla 4: Intereses y hobbies.
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Intereses</Text>
      <Text style={styles.introduccion}>
        En mi tiempo libre disfruto la lectura, la programación, el deporte, el fútbol y la música.
      </Text>

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

      <TarjetaHobby
        titulo="Escuchar música"
        detalle="Me gusta la música urbana cristiana y la música romántica cristiana."
        icono="musical-notes-outline"
        enlaces={[
          {
            titulo: "Urban Christian",
            href: "https://open.spotify.com/playlist/75UN9lrSGbkYl8JHf2ojvO?si=GcqoFYs9QxeII7e8yxclOw",
          },
          {
            titulo: "Románticas cristianas",
            href: "https://open.spotify.com/playlist/7tgriHVMSbBuihjWC6Ccol?si=eCMerDimRWqmpKmGrRZZjQ",
          },
        ]}
      />

      <TarjetaHobby
        titulo="Fútbol"
        detalle="El fútbol es uno de mis hobbies."
        icono="football-outline"
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: "#171D26" },
  contenido: {
    padding: 18,
    paddingBottom: 30,
    flexGrow: 1,
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },
  titulo: { color: "#F4F6F8", fontSize: 23, fontWeight: "800" },
  introduccion: {
    color: "#AAB4C0",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 6,
    marginBottom: 12,
  },
});
