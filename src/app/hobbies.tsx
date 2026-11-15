// Pantalla 4: Intereses y hobbies.
import { ScrollView, StyleSheet, Text } from "react-native";
import TarjetaHobby from "../components/TarjetaHobby";

export default function Hobbies() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Intereses</Text>
      <Text style={styles.introduccion}>
        En mi tiempo libre disfruto escuchar música y el fútbol.
      </Text>

      <TarjetaHobby
        titulo="Escuchar música"
        detalle="Me gusta la música urbana cristiana y la música romántica cristiana."
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
