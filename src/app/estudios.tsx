// Pantalla 2: Formación académica y complementaria verificada en el CV.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaEstudio from "../components/TarjetaEstudio";

export default function Estudios() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Formación académica</Text>
      <Text style={styles.introduccion}>
        Estudios y formación complementaria incluidos en el currículum.
      </Text>

      <TarjetaEstudio
        institucion="SENA"
        programa="Tecnología en Análisis y Desarrollo de Software"
        periodo="En curso"
        enCurso={true}
      />
      <TarjetaEstudio
        institucion="SENA"
        programa="Técnico en Programación de Software"
        periodo="2025"
        enCurso={false}
      />
      <TarjetaEstudio
        institucion="Colegio Arbolizadora Baja IED"
        programa="Bachiller Académico"
        periodo="2025"
        enCurso={false}
      />

      <View style={styles.separador} />
      <Text style={styles.subtitulo}>Formación complementaria</Text>
      <TarjetaEstudio
        institucion="SENA"
        programa="Controles y Seguridad Informática"
        periodo="2026"
        enCurso={false}
      />
      <TarjetaEstudio
        institucion="SENA"
        programa="Apropiación de Conceptos de Ciberseguridad"
        periodo="2026"
        enCurso={false}
      />
      <TarjetaEstudio
        institucion="Udemy"
        programa="Ciberseguridad"
        periodo="En curso"
        enCurso={true}
      />
      <TarjetaEstudio
        institucion="Open English"
        programa="Inglés"
        periodo="En curso"
        enCurso={true}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: "#171D26" },
  contenido: { padding: 18, paddingBottom: 30, flexGrow: 1, width: "100%", maxWidth: 760, alignSelf: "center" },
  titulo: { color: "#F4F6F8", fontSize: 23, fontWeight: "800" },
  introduccion: { color: "#AAB4C0", fontSize: 14, lineHeight: 20, marginTop: 6, marginBottom: 10 },
  separador: { height: 1, backgroundColor: "#394554", marginVertical: 15 },
  subtitulo: { color: "#E7A58D", fontSize: 17, fontWeight: "700", marginBottom: 6 },
});
