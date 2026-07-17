import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const COLORS = {
  primary: "#2563EB",
  background: "#F5F7FA",
  surface: "#FFFFFF",
  border: "#E2E8F0",
  text: "#0F172A",
  textSecondary: "#64748B",
};

export default function AddScreen() {
  const [name, setName] = useState("");
  const [artist, setArtist] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >

      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={24}
            color={COLORS.text}
          />
        </TouchableOpacity>

        <View style={styles.headerText}>
          <Text style={styles.title}>
            Add New Product
          </Text>

          <Text style={styles.subtitle}>
            Create a New Product
          </Text>
        </View>
      </View>

      <View style={styles.imageCard}>
        <Ionicons
          name="image"
          size={50}
          color={COLORS.primary}
        />

        <Text style={styles.imageTitle}>
          Product Image
        </Text>

        <Text style={styles.imageSubtitle}>
          Enter image URL below
        </Text>

        <TextInput
          placeholder="Paste Image URL"
          style={styles.input}
          value={image}
          onChangeText={setImage}
        />
      </View>

      <View style={styles.formCard}>
        <Text style={styles.sectionTitle}>
          Product Information
        </Text>

        <View style={styles.inputContainer}>
          <Ionicons
            name="musical-notes"
            size={20}
            color={COLORS.primary}
          />

          <TextInput
            placeholder="Product Name"
            style={styles.inputField}
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="person"
            size={20}
            color={COLORS.primary}
          />

          <TextInput
            placeholder="Artist"
            style={styles.inputField}
            value={artist}
            onChangeText={setArtist}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="pricetag"
            size={20}
            color={COLORS.primary}
          />

          <TextInput
            placeholder="Category"
            style={styles.inputField}
            value={category}
            onChangeText={setCategory}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="cash"
            size={20}
            color={COLORS.primary}
          />

          <TextInput
            placeholder="Price"
            keyboardType="numeric"
            style={styles.inputField}
            value={price}
            onChangeText={setPrice}
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons
            name="document-text"
            size={20}
            color={COLORS.primary}
          />

          <TextInput
            placeholder="Description"
            style={[styles.inputField, { height: 100 }]}
            multiline
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>

      <View style={styles.previewCard}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 15,
          }}
        >
          <Ionicons
            name="eye"
            size={20}
            color={COLORS.primary}
          />

          <Text
            style={[
              styles.sectionTitle,
              { marginLeft: 8, marginBottom: 0 },
            ]}
          >
            Live Preview
          </Text>
        </View>

        {image !== "" && (
          <Image
            source={{ uri: image }}
            style={styles.previewImage}
          />
        )}

        <Text style={styles.previewName}>
          {name || "Product Name"}
        </Text>

        <Text style={styles.previewArtist}>
          {artist || "Artist Name"}
        </Text>

        <View style={styles.previewBadge}>
          <Text style={styles.previewBadgeText}>
            {category || "Category"}
          </Text>
        </View>

        <Text style={styles.previewPrice}>
          ฿ {price || "0"}
        </Text>
      </View>

      <TouchableOpacity style={styles.button}>
        <Ionicons name="add-circle" size={22} color="#fff" />

        <Text style={styles.buttonText}>
          Add New Product
        </Text>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    backgroundColor: COLORS.surface,
  },

  headerText: {
    marginLeft: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  subtitle: {
    marginTop: 3,
    color: COLORS.textSecondary,
    fontSize: 14,
  },

  imageCard: {
    margin: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 25,
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  imageTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginTop: 10,
    color: COLORS.text,
  },

  imageSubtitle: {
    fontSize: 14,
    color: COLORS.textSecondary,
    marginTop: 4,
    marginBottom: 15,
  },

  formCard: {
    marginHorizontal: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 15,
    color: COLORS.text,
  },

  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 12,
    marginBottom: 15,
    backgroundColor: "#fff",
  },

  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginTop: 15,
    color: COLORS.text,
    backgroundColor: "#fff",
  },

  inputField: {
    flex: 1,
    marginLeft: 10,
    paddingVertical: 14,
    color: COLORS.text,
  },

  previewCard: {
    margin: 20,
    backgroundColor: COLORS.surface,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: COLORS.border,
  },

  previewName: {
    marginTop: 4,
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.primary,
  },

  previewArtist: {
    marginTop: 6,
    fontSize: 16,
    color: COLORS.textSecondary,
  },

  previewCategory: {
    marginTop: 8,
    fontSize: 14,
    color: COLORS.primary,
    fontWeight: "600",
  },

  previewBadge: {
    alignSelf: "flex-start",
    marginTop: 10,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  previewBadgeText: {
    color: "#2563EB",
    fontWeight: "700",
  },

  previewPrice: {
    marginTop: 12,
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  previewImage: {
    width: "100%",
    height: 180,
    borderRadius: 12,
    marginTop: 15,
    marginBottom: 20,
    resizeMode: "contain",
  },

  button: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    marginTop: 10,
    paddingVertical: 16,
    borderRadius: 14,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 18,
    marginLeft: 8,
  },
});