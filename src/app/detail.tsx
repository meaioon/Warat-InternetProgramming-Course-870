import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";

import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DetailScreen() {
  const {
  name,
  artist,
  category,
  price,
  description,
  image,
  } = useLocalSearchParams();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 30 }}
      >

      <View style={styles.header}>

        <TouchableOpacity
            onPress={() => {
              if (router.canGoBack()) {
                  router.back();
              } else {
                  router.replace("/");
              }
            }}
            style={styles.side}
        >
            <Ionicons
                name="arrow-back"
                size={22}
                color="#2563EB"
            />
            <Text style={styles.backText}>Back</Text>
        </TouchableOpacity>

        <View style={styles.center}>
            <Text style={styles.headerTitle}>
                Product Detail
            </Text>
        </View>

        <View style={styles.side} />

      </View>

      <View style={{ width: 55 }} />

      <View style={styles.imageCard}>
        <Image
          source={{ uri: image as string }}
          style={styles.image}
        />
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.name}>{name}</Text>
      <View style={styles.sectionHeader}>
          <Ionicons
              name="person"
              size={18}
              color="#2563EB"
          />
          <Text style={styles.label}>
              Artist
          </Text>
      </View>

      <Text style={styles.value}>
          {artist}
      </Text>
      <View style={styles.divider} />
        <Text style={styles.label}>
          Price
        </Text>

        <Text style={styles.price}>
          ฿ {price}
        </Text>
        <View style={styles.divider} />
        <View style={styles.sectionSecondary}>
          <Ionicons
            name="pricetag"
            size={18}
            color="#2563EB"
          />
          <Text style={styles.label}>
            Category
          </Text>
        </View>
        <View style={styles.categoryBadge}>
            <Text style={styles.categoryBadgeText}>
                {category}
            </Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.sectionSecondary}>
          <Ionicons
            name="document-text"
            size={18}
            color="#2563EB"
          />
          <Text style={styles.label}>
            Description
          </Text>
        </View>
        <Text style={styles.description}>
          {description}
        </Text>
        <TouchableOpacity style={styles.buyButton}>
          <Ionicons name="cart" size={20} color="#fff" />
          <Text style={styles.buyText}> Add to Cart </Text>
</TouchableOpacity>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F7FA",
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      height: 60,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#E5E7EB",
    },

    side: {
      width: 90,
      flexDirection: "row",
      alignItems: "center",
      paddingLeft: 15,
    },

    center: {
      flex: 1,
      alignItems: "center",
    },

    backText: {
      marginLeft: 5,
      color: "#2563EB",
      fontWeight: "600",
    },

    headerTitle: {
      fontSize: 22,
      fontWeight: "700",
    },

    sectionHeader: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 20,
    },

    image: {
      width: "100%",
      height: 320,
      resizeMode: "contain",
    },

    imageCard:{
      margin:20,
      marginBottom: 15,
      backgroundColor:"#fff",
      borderRadius:20,
      padding:20,

      shadowColor:"#000",
      shadowOpacity:0.08,
      shadowRadius:10,
      elevation:5,
    },

    infoCard: {
      marginHorizontal: 20,
      marginBottom: 30,
      marginTop: 5,
      backgroundColor: "#fff",
      borderRadius: 20,
      padding: 22,

      shadowColor: "#000",
      shadowOpacity: 0.08,
      shadowRadius: 10,
      elevation: 5,
    },

    name: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 10,
      color:"#2563EB",
    },

    artist: {
      fontSize: 18,
      color: "#666",
     marginBottom: 12,
    },

    sectionSecondary: {
      flexDirection: "row",
      alignItems: "center",
    },

    categoryBadge: {
      alignSelf: "flex-start",
      marginTop: 8,
      backgroundColor: "#DBEAFE",
      paddingHorizontal: 14,
      paddingVertical: 8,
      borderRadius: 20,
    },

    categoryBadgeText: {
      color: "#2563EB",
      fontWeight: "700",
    },

    price: {
      marginTop: 10,
      fontSize: 34,
      fontWeight: "700",
      color: "#2563EB",
    },

    label: {
      marginLeft: 8,
      fontSize: 16,
      fontWeight: "600",
      color: "#666",
    },

    value: {
      marginTop: 5,
      fontSize: 18,
      color: "#111",
    },

    description: {
      marginTop: 8,
      fontSize: 16,
      lineHeight: 24,
      color: "#444",
    },

    buyButton: {
      marginTop: 30,
      backgroundColor: "#2563EB",
      borderRadius: 14,
      height: 55,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },

    buyText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "700",
    },

    divider: {
      height: 1,
      backgroundColor: "#E5E7EB",
      marginVertical: 18,
    },
});