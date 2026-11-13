//Pantalla 1: Datos Personales

import { Alert, ScrollView, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MiBoton from "../components/MiBoton";

export default function Inicio() {
  return (
    <ScrollView contentContainerStyle={styles.contenido}>
      <View style={styles.perfil}>
        <Ionicons name="person-circle" size={100} color="#6D28D9" />
        <Text style={styles.nombre}>Tu nombre</Text>
        <Text style={styles.titulacion}>Tu titulación</Text>
      </View>

      <Text style={styles.encabezado}>Perfil</Text>
      <Text style={styles.perfilTexto}>
        Escribe aquí una breve descripción sobre ti, tus conocimientos y tus
        objetivos.
      </Text>

      <Text style={styles.encabezado}>Contacto</Text>

      <MiBoton
        titulo="Enviar correo"
        icono="mail-outline"
        onPress={() =>
          Alert.alert("Correo", "tucorreo@ejemplo.com")
        }
      />

      <MiBoton
        titulo="Llamar"
        icono="call-outline"
        onPress={() =>
          Alert.alert("Teléfono", "+57 300 000 0000")
        }
      />

      <MiBoton
        titulo="LinkedIn"
        icono="logo-linkedin"
        onPress={() =>
          Alert.alert("LinkedIn", "https://www.linkedin.com/in/tu-perfil" )
        }
      />

      <MiBoton
        titulo="Mis proyectos Git"
        icono="logo-github"
        onPress={() =>
          Alert.alert("Repositorio", "https://github.com/tu-usuario" )
        }
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
  perfil: {
    alignItems: "center",
    marginBottom: 20,
  },
  nombre: {
    color: "#1E293B",
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 8,
  },
  titulacion: {
    color: "#6D28D9",
    fontSize: 16,
    marginTop: 4,
  },
  encabezado: {
    color: "#1E293B",
    fontSize: 19,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
  },
  perfilTexto: {
    color: "#475569",
    fontSize: 15,
    lineHeight: 22,
  },
});
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL