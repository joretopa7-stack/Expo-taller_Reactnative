import { Link, type Href } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps, CSSProperties } from "react";
import { useRef, useState } from "react";
import {
  Animated,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

type NombreIcono = ComponentProps<typeof Ionicons>["name"];
type Enlace = { titulo: string; href: string };

type Props = {
  titulo: string;
  detalle: string;
  icono: NombreIcono;
  enlaces?: Enlace[];
};

const estiloPlaylistWeb: CSSProperties = {
  minHeight: 46,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#30243A",
  border: "1px solid #8A5AA0",
  borderRadius: 11,
  padding: "11px 14px",
  boxSizing: "border-box",
  textDecoration: "none",
};

export default function TarjetaHobby({
  titulo,
  detalle,
  icono,
  enlaces = [],
}: Props) {
  const [expandido, setExpandido] = useState(false);
  const opacidad = useRef(new Animated.Value(0)).current;

  const alternar = () => {
    if (!expandido) {
      opacidad.setValue(0);
      setExpandido(true);
      Animated.timing(opacidad, {
        toValue: 1,
        duration: 180,
        useNativeDriver: false,
      }).start();
      return;
    }

    Animated.timing(opacidad, {
      toValue: 0,
      duration: 140,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) setExpandido(false);
    });
  };

  return (
    <View style={styles.tarjeta}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={`${titulo}. ${expandido ? "Ocultar" : "Mostrar"} detalles.`}
        accessibilityState={{ expanded: expandido }}
        onPress={alternar}
        style={({ pressed }) => [styles.encabezado, pressed && styles.presionado]}
      >
        <Ionicons name={icono} size={26} color="#E95420" />
        <View style={styles.textosEncabezado}>
          <Text style={styles.titulo}>{titulo}</Text>
          <Text style={styles.instruccion}>
            {expandido ? "Ocultar detalles" : "Ver detalles"}
          </Text>
        </View>
      </Pressable>

      {expandido ? (
        <Animated.View
          style={[
            styles.detalle,
            {
              opacity: opacidad,
              transform: [
                {
                  translateY: opacidad.interpolate({
                    inputRange: [0, 1],
                    outputRange: [4, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={styles.textoDetalle}>{detalle}</Text>
          {enlaces.map((enlace) =>
            Platform.OS === "web" ? (
              <a
                key={enlace.href}
                href={enlace.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={enlace.titulo}
                style={estiloPlaylistWeb}
              >
                <Text style={styles.textoBoton}>{enlace.titulo}</Text>
              </a>
            ) : (
              <Link key={enlace.href} href={enlace.href as Href} asChild>
                <Pressable
                  accessibilityRole="link"
                  accessibilityLabel={enlace.titulo}
                  style={({ pressed }) => [
                    styles.botonPlaylist,
                    pressed && styles.botonPresionado,
                  ]}
                >
                  <Text style={styles.textoBoton}>{enlace.titulo}</Text>
                </Pressable>
              </Link>
            ),
          )}
        </Animated.View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  tarjeta: {
    backgroundColor: "#222B36",
    borderColor: "#394554",
    borderWidth: 1,
    borderRadius: 14,
    marginVertical: 7,
    overflow: "hidden",
  },
  encabezado: {
    minHeight: 76,
    padding: 17,
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  presionado: { backgroundColor: "#2A3542" },
  textosEncabezado: { flex: 1 },
  titulo: { color: "#F4F6F8", fontWeight: "700", fontSize: 17 },
  instruccion: { color: "#AAB4C0", fontSize: 12, marginTop: 4 },
  detalle: {
    borderTopWidth: 1,
    borderTopColor: "#394554",
    padding: 16,
    gap: 10,
  },
  textoDetalle: { color: "#D3D9E0", fontSize: 14, lineHeight: 21 },
  botonPlaylist: {
    minHeight: 46,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#30243A",
    borderColor: "#8A5AA0",
    borderWidth: 1,
    borderRadius: 11,
    paddingHorizontal: 14,
    paddingVertical: 11,
  },
  botonPresionado: { opacity: 0.78, transform: [{ scale: 0.99 }] },
  textoBoton: { color: "#FFFFFF", fontSize: 14, fontWeight: "700" },
});
