import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

const SaleOffer = () => {
  const saleOffers = [
    {
      id: "1",
      uri: "https://cdn.shopify.com/s/files/1/0420/7073/7058/files/4MSS2742-01-M36.jpg?v=1713208377",
    },
    {
      id: "2",
      uri: "https://www.91-cdn.com/hub/wp-content/uploads/2023/09/iPhone-15-Croma.jpg",
    },
    {
      id: "3",
      uri: "https://i.pinimg.com/736x/ac/6d/ac/ac6dacb6ab63c2f8a543cc9556324224.jpg",
    },
    {
      id: "4",
      uri: "https://m.media-amazon.com/images/G/31/PC_Laptops/November_BAU/Intel_i7_1400x800._CB542328625_.gif",
    },
    {
      id: "5",
      uri: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/jeans-offer-fashion-sale-template-design-deabb27550446f1d9d3d7332fa682850_screen.jpg?ts=1662128838",
    },
    {
      id: "6",
      uri: "https://cdn.create.vista.com/downloads/1a24542e-d469-4123-82be-17eb66c1524b_1024.jpeg",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Text style={styles.title}>🔥 Exciting Sale Offers! 🔥</Text>
      <View style={styles.gridContainer}>
        {saleOffers.map((offer) => (
          <View key={offer.id} style={styles.imageContainer}>
            <Image source={{ uri: offer.uri }} style={styles.image} />
            <View style={styles.overlay}>
              <Text style={styles.offerText}>Special Offer</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    paddingHorizontal: 15,
    backgroundColor: "#fffbf0", // Subtle beige background for warmth
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "#d9534f", // Vibrant red for excitement
    marginVertical: 20,
    letterSpacing: 0.5,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  imageContainer: {
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 15,
    overflow: "hidden",
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  image: {
    width: "100%",
    height: Dimensions.get("window").width * 0.48, // Ensures a square layout
    resizeMode: "cover",
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black for contrast
    paddingVertical: 10,
    alignItems: "center",
  },
  offerText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SaleOffer;
