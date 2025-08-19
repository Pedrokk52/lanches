import { Stack } from "expo-router";
import { StyleSheet } from "react-native";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: styles.header,
        headerTitleStyle: styles.title,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Lista de Lanches" }} />
      <Stack.Screen name="detalhes" options={{ title: "Detalhes do Lanche" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(136, 0, 0, 1)",
  },
  title: {
    color: "#fff",
  },
});