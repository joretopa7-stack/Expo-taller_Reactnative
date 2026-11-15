// Pantalla 1: Datos personales.
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView style={styles.pantalla} contentContainerStyle={styles.contenido}>
      <View style={styles.perfil}>
        <View style={styles.avatar}>
          <Ionicons name="person-circle" size={96} color="#E95420" />
        </View>
        <Text style={styles.nombre}>Jorge Alejandro Torres Páez</Text>
        <Text style={styles.titulacion}>
          Aprendiz ADSO · Desarrollo de software · Soporte IT
        </Text>
        <View style={styles.estado}>
          <View style={styles.estadoPunto} />
          <Text style={styles.estadoTexto}>En formación · SENA</Text>
        </View>
      </View>

      <View style={styles.panel}>
        <Text style={styles.etiqueta}>PERFIL PROFESIONAL</Text>
        <Text style={styles.perfilTexto}>
          Estudiante de Tecnología en Análisis y Desarrollo de Software (ADSO)
          en el SENA, con formación técnica en programación y experiencia
          académica construyendo una aplicación web de gestión veterinaria.
          Manejo React, TypeScript, Node.js, Express y PostgreSQL. Busco una
          oportunidad de práctica o nivel trainee/junior en desarrollo de
          software, soporte IT o soporte de aplicaciones.
        </Text>
      </View>

      <View style={styles.panel}>
        <Text style={styles.etiqueta}>TECNOLOGÍAS</Text>
        <Text style={styles.tecnologias}>
          React · TypeScript · JavaScript · Node.js · Express · PostgreSQL · Git
        </Text>
      </View>

      <View style={styles.panelContacto}>
        <Text style={styles.tituloSeccion}>Contacto</Text>
        <MiBoton
          titulo="Enviar correo"
          icono="mail-outline"
          href="mailto:joretopa7@gmail.com"
        />
        <MiBoton
          titulo="Llamar"
          icono="call-outline"
          href="tel:+573115236763"
        />
      </View>

      <View style={styles.panelContacto}>
        <Text style={styles.tituloSeccion}>Perfiles</Text>
        <MiBoton
          titulo="LinkedIn"
          icono="logo-linkedin"
          href="https://linkedin.com/in/jorge-torres-paez-120198417"
          nuevaPestana
        />
        <MiBoton
          titulo="Mis proyectos GitHub"
          icono="logo-github"
          href="https://github.com/joretopa7-stack"
          nuevaPestana
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  pantalla: { backgroundColor: "#171D26" },
  contenido: {
    padding: 18,
    paddingBottom: 30,
    flexGrow: 1,
    gap: 14,
    width: "100%",
    maxWidth: 760,
    alignSelf: "center",
  },
  perfil: {
    alignItems: "center",
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 18,
    padding: 20,
  },
  avatar: {
    width: 112,
    height: 112,
    borderRadius: 56,
    backgroundColor: "#30243A",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  nombre: {
    color: "#F4F6F8",
    fontSize: 23,
    fontWeight: "800",
    textAlign: "center",
  },
  titulacion: {
    color: "#D3D9E0",
    fontSize: 14,
    textAlign: "center",
    marginTop: 7,
    lineHeight: 20,
  },
  estado: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#303B47",
    borderRadius: 999,
    paddingHorizontal: 11,
    paddingVertical: 6,
    marginTop: 13,
    gap: 7,
  },
  estadoPunto: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#E95420",
  },
  estadoTexto: { color: "#F4F6F8", fontSize: 12, fontWeight: "600" },
  panel: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  etiqueta: {
    color: "#E7A58D",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 9,
  },
  perfilTexto: { color: "#D3D9E0", fontSize: 14, lineHeight: 22 },
  tecnologias: { color: "#F4F6F8", fontSize: 14, lineHeight: 22 },
  panelContacto: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    padding: 16,
  },
  tituloSeccion: {
    color: "#F4F6F8",
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 8,
  },
});
