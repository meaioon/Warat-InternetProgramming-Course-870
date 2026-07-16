import { useState } from "react";
import {
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity
} from "react-native";

export default function AddScreen() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>
        Add Product
      </Text>

      <TextInput
        placeholder="Cassette Name"
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TextInput
        placeholder="Artist"
        style={styles.input}
        value={artist}
        onChangeText={setArtist}
      />

      <TextInput
        placeholder="Price"
        keyboardType="numeric"
        style={styles.input}
        value={price}
        onChangeText={setPrice}
      />

      <TextInput
        placeholder="Image URL"
        style={styles.input}
        value={image}
        onChangeText={setImage}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Save Product
        </Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 25,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
  },

  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});