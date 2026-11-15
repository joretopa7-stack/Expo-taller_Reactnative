//Menú inferior con pestañas e íconos

import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function Layout() {
  return (
    <>
      <StatusBar style="light" />
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#E95420",
        tabBarInactiveTintColor: "#AAB4C0",
        tabBarStyle: {
          backgroundColor: "#222B36",
          borderTopColor: "#394554",
          height: 66,
          paddingTop: 7,
          paddingBottom: 8,
        },
        tabBarLabelStyle: { fontSize: 11, fontWeight: "600" },
        headerStyle: { backgroundColor: "#171D26" },
        headerTintColor: "#F4F6F8",
        headerTitleStyle: { fontWeight: "700" },
        sceneStyle: { backgroundColor: "#171D26" },
      }}
    >
      {/* Pestaña de Inicio */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Inicio",
          headerTitle: "Datos Personales",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={typeof color === "string" ? color : "#AAB4C0"} />
          ),
        }}
      />

      {/* COMPLETAR: Agrega aquí la pestaña "estudios" con el icono "school-outline" */}
      <Tabs.Screen
        name="estudios"
        options={{
          title: "Estudios",
          headerTitle: "Formación Académica",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="school-outline" size={size} color={typeof color === "string" ? color : "#AAB4C0"} />
          ),
        }}
      />

      {/* COMPLETAR: Agrega aquí la pestaña "experiencia" con el icono "briefcase-outline" */}
      <Tabs.Screen
        name="experiencia"
        options={{
          title: "Experiencia",
          headerTitle: "Experiencia Laboral",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="briefcase-outline" size={size} color={typeof color === "string" ? color : "#AAB4C0"} />
          ),
        }}
      />

      {/* COMPLETAR: Agrega aquí la pestaña "hobbies" con el icono "heart-outline" */}
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerTitle: "Intereses",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" size={size} color={typeof color === "string" ? color : "#AAB4C0"} />
          ),
        }}
      />
      <Tabs.Screen name="explore" options={{ href: null }} />
    </Tabs>
    </>
  );
}
//ESTRUCTURA DE LA APLICACIÓN FUNCIONAL
