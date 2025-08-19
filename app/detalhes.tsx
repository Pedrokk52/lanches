import { useLocalSearchParams, router } from "expo-router";
import {
  Button,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { lanches } from "../assets/mockups/lanches";

export default function Detalhes() {
  const { id } = useLocalSearchParams();
  const lanche = lanches.find((item) => item.id === Number(id));

  if (!lanche) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Lanche não encontrado</Text>
        <Button title="Voltar" onPress={router.back} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: lanche.image }} style={styles.image} />
      <Text style={styles.title}>{lanche.nome}</Text>
      <Text style={styles.price}>Preço: R$ {lanche.preco?.toFixed(2)}</Text>
      <Text style={styles.subtitle}>Ingredientes:</Text>
      <FlatList
        data={lanche.ingredientes}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <Text style={styles.ingrediente}>• {item}</Text>}
      />
      <Button title="Voltar." onPress={router.back} color="rgba(255, 187, 0, 1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e2e0e0ff",
    padding: 16,
  },
  image: {
    width: "100%",
    aspectRatio: 1.6,
    borderRadius: 10,
    marginBottom: 12,
    resizeMode: "cover",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "rgba(255, 128, 0, 1)",
    marginBottom: 6,
  },
  price: {
    fontSize: 18,
    marginBottom: 12,
    color: "#c44",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 6,
  },
  ingrediente: {
    fontSize: 16,
    marginBottom: 4,
  },
});