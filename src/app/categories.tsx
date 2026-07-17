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
    "KITA Records",
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

  const categorySubtitle: Record<string, string> = {
  "GMM Grammy": "จีเอ็มเอ็ม แกรมมี่ (แกรมมี่ เอ็นเตอร์เทนเม้นต์)",
  "RS Promotion": "อาร์เอส โปรโมชั่น",
  "Nititad Promotion": "นิธิทัศน์ โปรโมชั่น",
  "KITA Records": "คีตา เรคคอร์ดส",
  "Bakery Music": "เบเกอรี่ มิวสิค",
  "Longan Sound Groove": "ร่องเสียงลำไย",
  "Nite Spot Production": "ไนท์สปอต โปรดักชั่น",
  "Metro Records": "เมโทร เรคคอร์ด",
  "Sony Music": "โซนี่ มิวสิค",
  "Warner Music": "วอร์เนอร์ มิวสิค",
  "EMI Thailand": "อีเอ็มไอ ไทยแลนด์",
  "Other Record Label": "ค่ายเพลงอื่น ๆ",
  "All": "แสดงทุกค่ายเพลง",
};
  
  export default function CategoriesScreen() {
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>

        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={26}
              color="#2563EB"
            />
          </TouchableOpacity>

          <View style={styles.headerText}>
            <Text style={styles.title}>
              Categories
            </Text>

            <Text style={styles.subtitle}>
              Choose a Record Label
            </Text>
          </View>
        </View>

        <View style={styles.countBadge}>
          <Ionicons
            name="albums"
            size={15}
            color="#2563EB"
          />

          <Text style={styles.count}>
            {categories.length} Categories
          </Text>
        </View>

      </View>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom:40,
        }}
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
          <View style={styles.iconCircle}>
            <Ionicons
              name={item === "All" ? "grid" : "albums"}
              size={22}
              color="#2563EB"
            />
          </View>

          <View style={{ marginLeft: 12 }}>
            
            <Text style={styles.cardText}>
              {item === "All" ? "All Products" : item}
            </Text>

            <Text style={styles.cardSub}>
              {item === "All"
                ? "แสดงสินค้าทั้งหมด"
                : categorySubtitle[item]}
            </Text>

          </View>

          <View style={{ flex: 1 }} />

          <Ionicons
            name="chevron-forward-circle-outline"
            size={22}
            color="#94A3B8"
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
      paddingHorizontal:20,
    },
  
    title: {
      fontSize: 30,
      fontWeight: "bold",
    },

    subtitle: {
      marginTop:3,
      fontSize: 15,
      color: "#64748B",
    },

    headerContainer: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: 12,
      marginBottom: 24,
      paddingHorizontal: 15,
    },

    header: {
      flexDirection: "row",
      alignItems: "center",
      flex: 1,
      paddingVertical: 18,
      backgroundColor: "#fff",
      borderBottomWidth: 1,
      borderBottomColor: "#E2E8F0",
    },

    headerText: {
      marginLeft: 12,
      flex: 1,
    },

    count: {
      color: "#64748B",
      fontSize: 15,
      marginLeft: 6,
    },

    countBadge: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#DBEAFE",
      paddingHorizontal: 12,
      paddingVertical: 7,
      borderRadius: 20,
    },

    list: {
      gap: 15,
    },
  
    card: {
      backgroundColor:"#FFFFFF",
      borderWidth:1,
      borderColor:"#E2E8F0",
      borderRadius: 18,
      paddingVertical:18,
      paddingHorizontal:18,
      marginBottom: 16,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity:0.08,
      shadowRadius:8,
      elevation:3,
    },
  
    cardText: {
      color:"#0F172A",
      fontWeight: "bold",
      fontSize: 18,
    },

    cardContent: {
      flexDirection: "row",
      alignItems: "center",
    },

    cardSub: {
      color: "#64748B",
      marginTop: 3,
      fontSize: 13,
    },

    allCard: {
      backgroundColor:"#ECFDF5",
      borderColor:"#10B981",
    },

    iconCircle:{
        width:48,
        height:48,
        borderRadius:24,
        backgroundColor:"#DBEAFE",
        justifyContent:"center",
        alignItems:"center",
        marginRight:14,
    },
  });