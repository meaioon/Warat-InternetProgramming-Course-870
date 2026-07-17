import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import cassetteProducts from "./data/cassette_products.json";

const COLORS = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  background: "#FFFFFF",
  surface: "#F8FAFC",
  border: "#E2E8F0",
  text: "#0F172A",
  textSecondary: "#64748B",
};

type Product = {
  id: string;
  name: string;
  artist: string;
  category: string;
  price: number;
  description: string;
  image: string;
};

export default function HomeScreen() {

  const { category } = useLocalSearchParams();
  console.log("Selected Category:", category);
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setProducts(cassetteProducts as Product[]);
  }, []);

  useEffect(() => {
    if (category) {
      setSelectedCategory(category as string);
    }
  }, [category]);

  const [showFilter, setShowFilter] = useState(false);

  const filteredProducts = products.filter((item) => {

  const matchSearch =
    item.name.toLowerCase().includes(search.toLowerCase()) ||
    item.artist.toLowerCase().includes(search.toLowerCase());

  const matchCategory =
    selectedCategory === "All" ||
    item.category === selectedCategory;

  return matchSearch && matchCategory;
});

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.background}
      />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.iconButton}>
          <Ionicons name="menu" size={24} color={COLORS.text} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          Product
        </Text>

        <Text style={styles.subtitle}>
          It's Second Hand! 
        </Text>

        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person" size={18} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Search */}
      <View style={styles.searchRow}>
        <View style={styles.searchBox}>
          <Ionicons
            name="search"
            size={18}
            color={COLORS.textSecondary}
          />

          <TextInput
            placeholder="Search products..."
            placeholderTextColor={COLORS.textSecondary}
            style={styles.input}
            value={search}
            onChangeText={setSearch}
          />
        </View>

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => router.push("/add")}
        >
          <Text style={styles.addButtonText}>+ Add Product</Text>
        </TouchableOpacity>
      </View>

      {/* Filter */}
      <View style={styles.filterRow}>
        <TouchableOpacity
          style={styles.filterButton}
          onPress={() => setShowFilter(!showFilter)}
        >
          <Text style={styles.filterText}>
            Filter ▼
          </Text>
        </TouchableOpacity>
      </View>
      {showFilter && (
        <ScrollView 
          showsVerticalScrollIndicator={false}
          style={styles.filterMenu}
        >
          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("All");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>All</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("GMM Grammy");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>GMM Grammy</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("RS Promotion");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>RS Promotion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Nititad Promotion");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Nititad Promotion</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("KITA Music");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>KITA Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Bakery Music");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Bakery Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Longan Sound Groove");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Longan Sound Groove</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Nite Spot Production");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Nite Spot Production</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Metro Records");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Metro Records</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Sony Music");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Sony Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Warner Music");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Warner Music</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("EMI Thailand");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>EMI Thailand</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setSelectedCategory("Other Record Label");
              setShowFilter(false);
            }}
          >
            <Text style={styles.filterItem}>Other Record Label</Text>
          </TouchableOpacity>
        </ScrollView>
      )}

      {/* Results */}
      <View style={styles.resultRow}>
        <Text style={styles.resultText}>
          Showing {filteredProducts.length} Products
        </Text>
      </View>

      {selectedCategory !== "All" && (
        <View style={styles.categoryBadge}>
          <Text style={styles.categoryBadgeText}>
            Category: {selectedCategory}
          </Text>
        </View>
      )}

      {/* Product Area */}
      <FlatList
        data={filteredProducts}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{
          padding: 16,
          paddingBottom: 100,
        }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              router.push({
                pathname: "/detail",
                params: {
                  id: item.id,
                  name: item.name,
                  artist: item.artist,
                  category: item.category,
                  price: item.price.toString(),
                  description: item.description,
                  image: item.image,
                },
              })
            }
          >
            <Image
              source={{ uri: item.image }}
              style={styles.image}
            />

            <Text style={styles.name}>{item.name}</Text>

            <Text style={styles.brand}>
              {item.artist}
              {" • "}
              <Text style={styles.category}>
                {item.category}
              </Text>
            </Text>

            <Text style={styles.price}>
              ฿ {item.price.toLocaleString()}
            </Text>
            </TouchableOpacity>
        )}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons
              name="search"
              size={60}
              color="#999"
            />

            <Text style={styles.noResultTitle}>
              No products found
            </Text>

            <Text style={styles.emptyText}>
              Try another keyword.
            </Text>

            <TouchableOpacity
              style={styles.resetButton}
              onPress={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
            >
              <Text style={styles.resetButtonText}>
                Reset Filter
              </Text>
            </TouchableOpacity>
          </View>
        }
      />

      {/* Bottom Navigation */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <View style={styles.iconContainer}>
          <Ionicons
            name="home"
            size={24}
            color={COLORS.textSecondary}
          />
          </View>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/add")}
        >
          <View style={styles.iconContainer}>
          <Ionicons
            name="add-circle"
            size={24}
            color={COLORS.primary}
          />
          </View>
          <Text
            style={[
              styles.navText,
              { color: COLORS.primary },
            ]}
          >
            Add
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.navItem}>
          <View style={styles.iconContainer}>
            <MaterialIcons
              name="inventory-2"
              size={24}
              color={COLORS.primary}
            />
          </View>
          <Text
            style={[
              styles.navText,
              { color: COLORS.primary },
            ]}
          >
            Products
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.navItem}
          onPress={() => router.push("/categories")}
        >
          <View style={styles.iconContainer}>
            <Ionicons
              name="folder"
              size={24}
              color={COLORS.primary}
            />
          </View>
          <Text
            style={[
              styles.navText,
              { color: COLORS.primary },
            ]}
          >
            Categories
          </Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 18,
    backgroundColor: COLORS.background,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },

  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: COLORS.primary,
  },

  subtitle: {
    color: COLORS.textSecondary,
    fontSize: 14,
    marginTop: 4,
  },

  iconButton: {
    width: 36,
    alignItems: "center",
  },

  profileButton: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
  },

  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 18,
    paddingTop: 18,
  },

  searchBox: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.surface,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    height: 48,
  },

  input: {
    flex: 1,
    marginLeft: 8,
    color: COLORS.text,
  },

  addButton: {
    marginLeft: 12,
    backgroundColor: COLORS.primary,
    paddingHorizontal: 18,
    height: 48,
    borderRadius: 12,
    justifyContent: "center",
    elevation: 2,
  },

  addButtonText: {
    color: "#fff",
    fontWeight: "700",
  },

  filterRow: {
    paddingHorizontal: 18,
    paddingVertical: 12,
  },

  filterMenu: {
    position: "absolute",
    top: 150,
    right: 18,
    width: 180,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
    elevation: 6,
    zIndex: 999,
  },

  filterItem: {
    padding: 14,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#F1F5F9",
  },

  filterButton: {
    alignSelf: "flex-end",
  },

  filterText: {
    color: COLORS.primary,
    fontWeight: "600",
    fontSize: 15,
  },

  resultRow: {
    paddingHorizontal: 18,
    marginBottom: 10,
  },

  resultText: {
    fontSize: 15,
    color: "#64748B",
    fontWeight: "600",
  },

  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 25,
  },

  emptyTitle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "700",
    color: COLORS.text,
  },

  emptySub: {
    marginTop: 8,
    fontSize: 15,
    textAlign: "center",
    color: COLORS.textSecondary,
  },

  resetButton: {
    marginTop: 20,
    backgroundColor: "#2563EB",
    paddingHorizontal: 22,
    paddingVertical: 12,
    borderRadius: 10,
  },

  resetButtonText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },

  card: {
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 5,
    elevation: 3,
  },

  image: {
    width: "100%",
    height: 200,
    resizeMode: "contain",
    borderRadius: 10,
    backgroundColor: "#F8FAFC",
  },

  name: {
    marginTop: 12,
    fontSize: 18,
    fontWeight: "700",
    color: COLORS.text,
  },

  brand: {
    marginTop: 6,
    fontSize: 15,
    color: COLORS.textSecondary,
  },

  category: {
    marginTop: 4,
    fontSize: 14,
    color: "#2563EB",
    fontWeight: "600",
  },

  price: {
    marginTop: 12,
    fontSize: 22,
    fontWeight: "bold",
    color: COLORS.primary,
  },

  bottomNav: {
    flexDirection: "row",
    height: 70,
    backgroundColor: COLORS.background,
    borderTopWidth: 1,
    borderTopColor: COLORS.border,
    paddingVertical: 12,
  },

  navItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  navText: {
    marginTop: 4,
    fontSize: 12,
    lineHeight: 14,
    fontWeight: "500",
    textAlign: "center",
    color: COLORS.textSecondary,
  },

  emptyContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
  },

  noResultTitle: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: "bold",
  },

  emptyText: {
    marginTop: 10,
    color: "#666",
    fontSize: 16,
  },

  iconContainer: {
    height: 28,
    justifyContent: "center",
    alignItems: "center",
  },

  categoryBadge: {
    alignSelf: "flex-start",
    marginHorizontal: 18,
    marginBottom: 10,
    backgroundColor: "#DBEAFE",
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
  },

  categoryBadgeText: {
    color: "#2563EB",
    fontWeight: "700",
  },
});