import React, { useContext } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AppContext } from "../context/AppContext";

const ProfileScreen = ({navigation}) => {
  const { setIsLoggedIn } = useContext(AppContext);


  return (
    <View style={styles.container}>
      <View style={styles.header} />
      <View style={styles.content}>
        <Text style={styles.name}>Hung Nguyen</Text>
        <Text style={styles.role}>Mobile developer</Text>
        <Text style={styles.description}>
          I have above 5 years of experience in native mobile apps development, 
          now I am learning React Native
        </Text>

        {/* Nút Sign Out */}
        <TouchableOpacity style={styles.signOutButton} onPress={() => setIsLoggedIn(false)}>
          <Text style={styles.signOutText}>Sign Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  header: {
    height: 300, // Chiều cao của phần nền xanh
    backgroundColor: "#00AEEF", // Màu xanh
  },
  content: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: -50, // Đẩy phần nội dung lên trên
    alignItems: "center",
    padding: 20,
  },
  name: {
    fontSize: 32,
    fontWeight: "bold",
    color: "gray",
    marginTop: 10,
  },
  role: {
    fontSize: 16,
    color: "#00AEEF",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 15,
  },
  description: {
    textAlign: "center",
    fontSize: 16,
    color: "#666",
    paddingHorizontal: 20,
  },
  signOutButton: {
    marginTop: 30,
    backgroundColor: "#FFA500",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  signOutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
