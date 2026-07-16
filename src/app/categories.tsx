import {
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
  
  const categories = [
    "GMM Grammy",
    "RS",
    "Nititad",
    "KITA",
    "Bakery Music",
    "Longan Sound Groove",
    "Nite Spot Production",
    "Metro Records",
    "Sony Music",
    "Warner Music",
    "EMI Thailand",
    "All",
  ];
  
  export default function CategoriesScreen() {
    return (
      <SafeAreaView style={styles.container}>
  
        <Text style={styles.title}>
          Categories
        </Text>

        <View style={styles.list}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.card}
          >
            <Text style={styles.cardText}>
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

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
  
    list: {
      gap: 15,
    },
  
    card: {
      backgroundColor: "#2563EB",
      borderRadius: 12,
      padding: 18,
    },
  
    cardText: {
      color: "#fff",
      fontWeight: "bold",
      fontSize: 18,
    },
  });