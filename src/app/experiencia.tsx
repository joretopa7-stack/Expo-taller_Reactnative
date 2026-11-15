// Pantalla 3: Proyecto académico destacado; el CV no registra empleos formales.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import TarjetaExperiencia from "../components/TarjetaExperiencia";

export default function Experiencia() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <Text style={styles.titulo}>Experiencia y proyectos</Text>
      <View style={styles.nota}>
        <Text style={styles.notaTexto}>
          El CV no registra experiencia laboral formal. Se presenta a continuación
          el proyecto académico destacado, sin atribuirlo a un empleo.
        </Text>
      </View>

      <TarjetaExperiencia
        empresa="Huellitas Saludables"
        cargo="Proyecto académico · Aplicación web para clínica veterinaria"
        periodo="Proyecto formativo ADSO"
        descripcion="Plataforma para gestionar usuarios y roles, mascotas y propietarios, disponibilidad de especialistas, citas e historiales clínicos. Incluye reglas para impedir reservas vencidas y cancelar automáticamente citas pasadas, conservando el motivo y origen de la cancelación."
      />

      <View style={styles.panel}>
        <Text style={styles.etiqueta}>STACK DOCUMENTADO</Text>
        <Text style={styles.texto}>
          React, TypeScript, Vite, Node.js, Express, Prisma 7, PostgreSQL, JWT,
          Joi, Pino, Vitest y Supertest.
        </Text>
        <Text style={styles.etiquetaSecundaria}>Aspectos técnicos</Text>
        <Text style={styles.texto}>
          Integración frontend/API/base de datos, validación de solicitudes,
          autenticación, registro de eventos y pruebas de lógica y endpoints.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: "#171D26" },
  contenido: { padding: 18, paddingBottom: 30, flexGrow: 1, width: "100%", maxWidth: 760, alignSelf: "center" },
  titulo: { color: "#F4F6F8", fontSize: 23, fontWeight: "800", marginBottom: 12 },
  nota: {
    borderLeftWidth: 3,
    borderLeftColor: "#E95420",
    backgroundColor: "#282F39",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
  },
  notaTexto: { color: "#D3D9E0", fontSize: 13, lineHeight: 20 },
  panel: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
    marginTop: 10,
  },
  etiqueta: { color: "#E7A58D", fontSize: 11, fontWeight: "800", letterSpacing: 1, marginBottom: 8 },
  etiquetaSecundaria: { color: "#E7A58D", fontSize: 13, fontWeight: "700", marginTop: 14, marginBottom: 6 },
  texto: { color: "#D3D9E0", fontSize: 14, lineHeight: 21 },
});
