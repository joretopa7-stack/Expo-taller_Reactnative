import { Link, type Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, CSSProperties } from "react";
import { Platform, Pressable, StyleSheet, Text } from "react-native";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];

type Props = {
  titulo: string;
  icono: NombreIcono;
  href: string;
  nuevaPestana?: boolean;
};

const estiloEnlaceWeb: CSSProperties = {
  backgroundColor: "#77216F",
  border: "1px solid #9B4B91",
  borderRadius: 12,
  padding: 14,
  margin: "6px 0",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: 10,
  width: "100%",
  boxSizing: "border-box",
  textDecoration: "none",
};

export default function MiBoton({
  titulo,
  icono,
  href,
  nuevaPestana = false,
}: Props) {
  if (Platform.OS === "web") {
    return (
      <a
        href={href}
        target={nuevaPestana ? "_blank" : undefined}
        rel={nuevaPestana ? "noopener noreferrer" : undefined}
        aria-label={titulo}
        style={estiloEnlaceWeb}
      >
        <Ionicons name={icono} size={20} color="#FFFFFF" />
        <Text style={styles.texto}>{titulo}</Text>
      </a>
    );
  }

  return (
    <Link href={href as Href} asChild>
      <Pressable
        accessibilityRole="link"
        accessibilityLabel={titulo}
        style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
      >
        <Ionicons name={icono} size={20} color="#FFFFFF" />
        <Text style={styles.texto}>{titulo}</Text>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  boton: {
    backgroundColor: "#77216F",
    borderColor: "#9B4B91",
    borderWidth: 1,
    borderRadius: 12,
    padding: 14,
    marginVertical: 6,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  presionado: {
    opacity: 0.76,
    transform: [{ scale: 0.99 }],
  },
  texto: {
    color: "#FFFFFF",
    fontWeight: "700",
  },
});
