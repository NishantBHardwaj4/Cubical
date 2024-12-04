import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { FlatList, GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

const screenWidth = Dimensions.get("window").width;

const CategoriesPart = ({ route }) => {
  const { item } = route.params;
  const navigation = useNavigation();

  return (
    <GestureHandlerRootView style={styles.container}>
      <LinearGradient
        colors={["#ff9a9e", "#f5f5f5"]}
        style={styles.background}
      >
        <Text style={styles.headerText}>Categories</Text>
        <FlatList
          data={item.subcategories}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate("AddProduct", { item })}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
              <Text style={styles.cardText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          numColumns={screenWidth > 500 ? 3 : 2}
        />
      </LinearGradient>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  headerText: {
    marginTop: 40,
    fontSize: 28,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
  },
  listContainer: {
    marginTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },
  card: {
    width: (screenWidth / 2) - 30,
    height: 180,
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "60%",
    height: "60%",
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: "cover",
  },
  cardText: {
    textAlign: "center",
    color: "#333",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default CategoriesPart;
