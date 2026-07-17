import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
  
  const categories = [
    "GMM Grammy",
    "RS Promotion",
    "Nititad Promotion",
    "KITA Music",
    "Bakery Music",
    "Longan Sound Groove",
    "Nite Spot Production",
    "Metro Records",
    "Sony Music",
    "Warner Music",
    "EMI Thailand",
    "Other Record Label",
    "All"
  ];
  
  export default function CategoriesScreen() {
    return (
      <SafeAreaView style={styles.container}>
      <TouchableOpacity
        onPress={() => router.back()}
      >

      <Ionicons
        name="arrow-back"
        size={28}
        color="#2563EB"
      />

      </TouchableOpacity>

        <Text style={styles.title}>Categories</Text>

        <Text style={styles.subtitle}>
        Choose a Record Label
        </Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.list}
      >
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={[
              styles.card,
              item === "All" && styles.allCard,
            ]}
            onPress={() =>
              router.push({
                pathname: "/",
                params: {
                  category: item,
                },
              })
            }
          >

        <View style={styles.cardContent}>
          <Ionicons
            name="albums"
            size={24}
            color="white"
          />

          <Text style={styles.cardText}>
            {item}
          </Text>

          <View style={{ flex: 1 }} />

          <Ionicons
            name="chevron-forward"
            size={22}
            color="white"
          />
        </View>

        </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding: 20,
    },
  
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: 20,
    },

    subtitle: {
      fontSize: 15,
      color: "#64748B",
      marginBottom: 20,
    },

    list: {
      gap: 15,
    },
  
    card: {
      backgroundColor: "#2563EB",
      borderRadius: 15,
      padding: 18,
      marginBottom: 12,

      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.15,
      shadowRadius: 4,

      elevation: 4,
    },
  
    cardText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
      marginLeft: 12,
    },

    cardContent: {
      flexDirection: "row",
      alignItems: "center",
    },

    allCard: {
      backgroundColor: "#10B981",
    },
  });