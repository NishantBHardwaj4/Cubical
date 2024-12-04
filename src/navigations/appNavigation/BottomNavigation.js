import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation, useRoute } from "@react-navigation/native";

const BottomTab = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const getSelectedTab = () => {
    switch (route.name) {
      case "ShomeHomeScreen":
        return "Home";
      case "SearchResultsScreen":
        return "Categories";
      case "CartScreen":
        return "Cart";
      case "UserScreen":
        return "User";
      default:
        return "Home";
    }
  };

  const selectedTab = getSelectedTab();

  return (
    <View style={styles.container}>
      {/* Home Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "Home" && styles.selectedTab]}
        onPress={() => navigation.navigate("ShomeHomeScreen")}
      >
        <Icon
          name="home"
          size={30}
          color={selectedTab === "Home" ? "#87CEEB" : "#888"} // Sky blue color for active tab
        />
        <Text style={[styles.tabText, selectedTab === "Home" && styles.selectedTabText]}>
          Home
        </Text>
      </TouchableOpacity>

      {/* Categories Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "Categories" && styles.selectedTab]}
        onPress={() => navigation.navigate("SearchResultsScreen")}
      >
        <Icon
          name="view-list"
          size={30}
          color={selectedTab === "Categories" ? "#87CEEB" : "#888"} // Sky blue color for active tab
        />
        <Text style={[styles.tabText, selectedTab === "Categories" && styles.selectedTabText]}>
          Categories
        </Text>
      </TouchableOpacity>

      {/* Cart Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "Cart" && styles.selectedTab]}
        onPress={() => navigation.navigate("CartScreen")}
      >
        <Icon
          name="cart"
          size={30}
          color={selectedTab === "Cart" ? "#87CEEB" : "#888"} // Sky blue color for active tab
        />
        <Text style={[styles.tabText, selectedTab === "Cart" && styles.selectedTabText]}>
          Cart
        </Text>
      </TouchableOpacity>

      {/* User Tab */}
      <TouchableOpacity
        style={[styles.tab, selectedTab === "User" && styles.selectedTab]}
        onPress={() => navigation.navigate("UserScreen")}
      >
        <Icon
          name="account"
          size={30}
          color={selectedTab === "User" ? "#87CEEB" : "#888"} // Sky blue color for active tab
        />
        <Text style={[styles.tabText, selectedTab === "User" && styles.selectedTabText]}>
          User
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 15,
  },
  tab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    fontSize: 12,
    color: "#888",
    marginTop: 5, // Adds space between icon and text
  },
  selectedTab: {
    // borderTopWidth: 3,
    borderColor: "#87CEEB", // Sky blue indicator
  },
  selectedTabText: {
    color: "#87CEEB", // Sky blue text for active tab
    fontWeight: "600",
  },
});

export default BottomTab;
