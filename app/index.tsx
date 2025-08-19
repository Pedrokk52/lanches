import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { lanches } from "../assets/mockups/lanches";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={lanches}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Link
            href={{ pathname: "/detalhes", params: { id: item.id.toString() } }}
            asChild
          >
            <TouchableOpacity style={styles.card}>
              <Image source={{ uri: item.image }} style={styles.image} />
              <Text style={styles.title}>{item.nome}</Text>
              <Text style={styles.price}>R$ {item.preco?.toFixed(2)}</Text>
            </TouchableOpacity>
          </Link>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#e4bf5cff",
  },
  card: {
    marginBottom: 16,
    backgroundColor: "#fcedbdff",
    borderRadius: 10,
    padding: 12,
    alignItems: "center",
    elevation: 2,
  },
   image: {
    width: 120,
    height: 80,
    borderRadius: 8,
    marginBottom: 8,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "rgba(151, 77, 2, 1)",
  },
  price: {
    fontSize: 16,
    color: "rgba(3, 3, 1, 1)",
  },
});