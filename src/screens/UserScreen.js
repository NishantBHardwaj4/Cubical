import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import BottomTab from "../navigations/appNavigation/BottomNavigation";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const UserScreen = () => {
  const handleSignOut = () => {
    // Logic for sign out
    console.log("User signed out.");
  };

  const user = {
    name: "Cubical",
    email: "Cubical@gmail.com",
    phone: "987654321",
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.header}>User Profile</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Name</Text>
          <Text style={styles.detail}>{user.name}</Text>

          <Text style={styles.label}>Email</Text>
          <Text style={styles.detail}>{user.email}</Text>

          <Text style={styles.label}>Phone</Text>
          <Text style={styles.detail}>{user.phone}</Text>
        </View>

        <GestureHandlerRootView>
          {/* <TouchableOpacity
            style={styles.signOutButton}
            onPress={handleSignOut}
          >
            <Text style={styles.signOutText}>Sign Out</Text>
          </TouchableOpacity> */}
        </GestureHandlerRootView>
      </View>
      <BottomTab />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
    alignItems: "center",
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
    marginVertical: 20,
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    width: "90%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginBottom: 30,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginBottom: 5,
  },
  detail: {
    fontSize: 18,
    fontWeight: "400",
    color: "#222",
    marginBottom: 15,
  },
  signOutButton: {
    backgroundColor: "#d9534f",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "80%",
  },
  signOutText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});

export default UserScreen;
