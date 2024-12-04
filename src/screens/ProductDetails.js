import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ProductDetails = ({ route }) => {
  const { product } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: product.image }} style={styles.productImage} />
      </View>

      <Text style={styles.productName}>{product.name}</Text>

      <Text style={styles.productDescription}>{product.description}</Text>

      <Text style={styles.rating}>Rating: ⭐ 4.5</Text>
      <Text style={styles.price}>${product.price}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addToCartButton}>
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buyButton}>
          <Text style={styles.buttonText}>Buy Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  header: {
    width: "100%",
    height: 120,
    backgroundColor: "lightpink",
    borderBottomRightRadius: 50,
    borderBottomLeftRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 3,
  },
  imageContainer: {
    alignItems: "center",
    marginTop: -60,
  },
  productImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 4,
  },
  productName: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  productDescription: {
    textAlign: "justify",
    marginHorizontal: 20,
    fontSize: 16,
    color: "#555",
    lineHeight: 22,
  },
  rating: {
    fontSize: 18,
    color: "#777",
    marginHorizontal: 20,
    marginTop: 10,
  },
  price: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
    marginHorizontal: 20,
    marginVertical: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 40,
  },
  addToCartButton: {
    backgroundColor: "#f0a500",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    flex: 1,
    marginRight: 10,
    alignItems: "center",
  },
  buyButton: {
    backgroundColor: "#007bff",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    flex: 1,
    marginLeft: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
});

export default ProductDetails;
