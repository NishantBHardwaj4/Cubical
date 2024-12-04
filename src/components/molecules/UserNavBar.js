// import React from "react";
// import { View, Text, Image } from "react-native";
// import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
// import Coins from 'react-native-vector-icons/FontAwesome6';
// import Icon from 'react-native-vector-icons/MaterialIcons';
// import { useNavigation } from "@react-navigation/native";
// import { useSelector } from "react-redux";
// import { selectCartCount } from "../../redux/featurs/cartSlice/CartSliceProduct";
// const UserNavBar = () => {
//   const navigation = useNavigation(); 
//   const cartCount = useSelector(selectCartCount);
 

//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         height: 70,
//         borderBottomEndRadius: 25,
//         borderBottomLeftRadius: 25,
//       }}>
//       <View
//         style={{
//           flexDirection: 'row',
//           alignItems: 'center',
//           paddingHorizontal: 20,
//         }}>
//         <Image
//           source={{
//             uri: 'https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png',
//           }}
//           style={{ width: 40, height: 40 }}
//         />
//         <View style={{ marginHorizontal: 10, alignContent: 'flex-start' }}>
//           <Text style={{ fontSize: 10 }}>Hello, Welcome</Text>
//           <Text style={{ fontSize: 20, fontWeight: '600' }}>Prince</Text>
//         </View>
//       </View>
//       <View style={{ flexDirection: 'row' ,marginRight:20}}>
//         <Coins name="coins" size={25} style={{marginHorizontal: 5}}/>
       
//         <View>
//         <GestureHandlerRootView style={{flexDirection:'row'}}>
        
//         <TouchableOpacity onPress={()=> navigation.navigate('SearchResultsScreen')}>
//         <Icon name="search" style={{marginHorizontal: 5}} size={25} />
//         </TouchableOpacity>
       
//           <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
//             <View style={{position:'relative'}} >
//              <Icon name="shopping-cart" size={25} style={{ marginHorizontal: 5 }} /> 
//             </View>
//             {cartCount > 0 && (
//                   <View
//                     style={{
//                       position: 'absolute',
//                       backgroundColor: 'lightpink',
//                       borderRadius: 10,
//                       padding: 3,
//                       top: -10,
//                       right: 3,
//                       minWidth: 20,
//                       alignItems: 'center',
//                     }}>
//                     <Text style={{ color: '#000', fontSize: 12 }}>{cartCount}</Text>
//                   </View>
//                 )}
            
//           </TouchableOpacity>
//         </GestureHandlerRootView>
//         </View>
//       </View>
//     </View>
//   );
// };

// export default UserNavBar;
import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
import Icon from "react-native-vector-icons/MaterialIcons";
import LinearGradient from "react-native-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectCartCount } from "../../redux/featurs/cartSlice/CartSliceProduct";

const UserNavBar = () => {
  const navigation = useNavigation();
  const cartCount = useSelector(selectCartCount);

  return (
    <LinearGradient
      colors={["#e3f2fd", "#F5F5F5",]}
      style={styles.navBar}
    >
      {/* User Info Section */}
      <View style={styles.userInfoContainer}>
        <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3u9qmFpVREXc8-W00nlQqtLHQG4dQZAO-_A&s",
          }}
          style={styles.userImage}
        />
        <View style={styles.userTextContainer}>
          <Text style={styles.greetingText}>Welcome Back,</Text>
          <Text style={styles.userName}>Cubical</Text>
        </View>
      </View>

      {/* Action Icons Section */}
      <View style={styles.actionIconsContainer}>
        <GestureHandlerRootView style={styles.gestureContainer}>
          <TouchableOpacity
            style={styles.iconTouchable}
            onPress={() => navigation.navigate("SearchResultsScreen")}
          >
            <Icon name="search" size={28} style={styles.iconSearch} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.iconTouchable}
            onPress={() => navigation.navigate("CartScreen")}
          >
            <View style={styles.cartContainer}>
              <Icon name="shopping-cart" size={28} style={styles.iconCart} />
              {cartCount > 0 && (
                <View style={styles.cartBadge}>
                  <Text style={styles.cartBadgeText}>{cartCount}</Text>
                </View>
              )}
            </View>
          </TouchableOpacity>
        </GestureHandlerRootView>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 90,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    paddingHorizontal: 20,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  userInfoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 3,
    borderColor: "#42a5f5",
  },
  userTextContainer: {
    marginLeft: 15,
  },
  greetingText: {
    fontSize: 14,
    color: "#1565c0",
    fontStyle: "italic",
  },
  userName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#0d47a1",
  },
  actionIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  gestureContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconTouchable: {
    marginHorizontal: 10,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 20,
    padding: 8,
  },
  iconSearch: {
    color: "#0d47a1",
  },
  iconCart: {
    color: "#2e7d32",
  },
  cartContainer: {
    position: "relative",
  },
  cartBadge: {
    position: "absolute",
    top: -8,
    right: -10,
    backgroundColor: "#d32f2f",
    borderRadius: 12,
    paddingVertical: 2,
    paddingHorizontal: 6,
    minWidth: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cartBadgeText: {
    color: "#fff",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default UserNavBar;
