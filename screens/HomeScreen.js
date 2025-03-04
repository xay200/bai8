import React from "react";
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 

const categories = [
  { id: 1, name: "Pizza", image: require("../assets/pizza.png") },
  { id: 2, name: "Burgers", image: require("../assets/burger.png") },
  { id: 3, name: "Steak", image: require("../assets/steak.png") },
];

const popularItems = [
  { id: 1, name: "Food 1", origin: "By Vietnam", price: "1$", image: require("../assets/food1.png") },
  { id: 2, name: "Food 2", origin: "By Japan", price: "3$", image: require("../assets/food2.png") },
  
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* Thanh tìm kiếm */}
      <View style={styles.searchContainer}>
        <Ionicons name="location-outline" size={20} color="gray" />
        <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
        <TouchableOpacity>
          <Ionicons name="filter" size={20} color="orange" />
        </TouchableOpacity>
      </View>

      {/* Danh mục món ăn */}
      <View style={styles.sectionContainer}>
        <View />
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <Ionicons name="filter-outline" size={20} color="#FFA500" />
          <Text>Filter</Text>
        </TouchableOpacity>
        <View />
      </View>
      <FlatList
        data={categories}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => ( 
          <View style={styles.categoryItem}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
      />

      {/* Món ăn phổ biến (cuộn ngang) */}
      <View style={styles.sectionContainer}>
        <View style={styles.line} />
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <View style={styles.line} />
      </View>
      <FlatList
        data={popularItems}
        horizontal={true}
        keyExtractor={(item) => item.id.toString()}
        showsHorizontalScrollIndicator={false}
         renderItem={({ item }) => (
         <View style={styles.popularItem}>
             <Image source={item.image} style={styles.popularImage} />
             <View style={styles.popularTextContainer}>
              <Text style={styles.foodName}>{item.name}</Text>
              <Text style={styles.foodOrigin}>{item.origin}</Text>
              <Text style={styles.foodPrice}>{item.price}</Text>
              </View>
         </View>
        )}
        />
    </View>

    
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    marginLeft: 10,
  },
  sectionContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "space-between",
    
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
    
  },
  categoryItem: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  popularItem: {
    width: 250,
    height: 150,
    flexDirection: "row", // Ảnh và text nằm ngang nhau
    alignItems: "center", // Căn giữa theo chiều dọc
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },

  popularTextContainer: {
    marginLeft: 10, // Khoảng cách giữa ảnh và text
    flex: 1, // Để text chiếm phần còn lại
  },
  popularImage: {
    width: 120,
    height: 100,
    borderRadius: 10,
  },
  foodName: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
  foodOrigin: {
    fontSize: 14,
    color: "#888",
  },
  foodPrice: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
});

