// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';

// // const Stack = createNativeStackNavigator();

// // const App = () => {
// //   return (
// // <NavigationContainer>
// //     <Stack.Navigator>
// //         {/* <Stack.Screen name="HomeScreen" component={HomeScreen} /> */}
// //         <Stack.Screen name="Todo Parts" component={TodoPart} />
// //         <Stack.Screen name="NotificationScreen" component={NotificationScreen} />
// //         {/* <Stack.Screen name="Sign In" component={SignIn} /> */}
// //         {/* <Stack.Screen name="Google Sign In" component={GoogleSignIn} /> */}
// //     </Stack.Navigator>
// // </NavigationContainer>
// //   )
// // }

// // export default App

// // import { View, Text } from 'react-native'
// // import React from 'react'
// // import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from './src/HomeScreen';
// // import NotificationScreen from './src/NotificationScreen';
// // import SignIn from './src/SignIn';
// // import GoogleSignIn from './src/SignIn';
// // import TodoPart from './src/TodoPart';
// // import { Provider } from "react-redux";
// // import { store } from './src/redux/Store';

// // const App = ()=> {
// //   return (
// //     <Provider store={store}>
// //        <View>
// //         <TodoPart />
// //        </View>
// //     </Provider>
// // );

// // }
// // export default App;

// // import React from "react";
// // import { View, Text } from "react-native";

// // const App = () => {
// //   return (
// //     <View>
// //       <Text>HEllo world</Text>
// //     </View>
// //   )
// // }

// // export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from "react-redux";
// import { store } from './src/redux/Store';

// import HomeScreen from './src/HomeScreen';
// import NotificationScreen from './src/NotificationScreen';
// import SignIn from './src/SignIn'; // Assuming you have SignIn here
// import GoogleSignIn from './src/GoogleSignIn'; // Separate component for GoogleSignIn
// import TodoPart from './src/TodoPart';
// import NumCounter from './src/NumCounter';
// import Screen from './src/Screen';
// import TodoList from './src/TodoList';
// import Form from './src/Form';
// import foofList from './src/screens/foodList';
// import Cart from './src/screens/cart';
// import ApiScreen from './src/ApiScreen';
// import AxiosScreen from './src/AxiosScreen';
// import PostData from './src/PostData';
// import AxiosLiveData from './src/AxiosLiveData';
// import NoteItem from './src/Note';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <NavigationContainer>
//         <Stack.Navigator>
//           {/* Define your screens here */}
//           {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
//           {/* <Stack.Screen name="Notifications" component={NotificationScreen} /> */}
//           {/* <Stack.Screen name="SignIn" component={SignIn} /> */}
//           {/* <Stack.Screen name="GoogleSignIn" component={GoogleSignIn} /> */}
//           <Stack.Screen name="Screen" component={Screen} />
//           <Stack.Screen name="TodoList" component={TodoList} />
//           {/* <Stack.Screen name="TodoPart" component={TodoPart} /> */}
//           <Stack.Screen name="NumCounter" component={NumCounter} />
//           <Stack.Screen name="From" component={Form} />
//           <Stack.Screen name="foodList" component={foofList} />
//           <Stack.Screen name="CartItem" component={Cart}/>
//           <Stack.Screen name="ApiScreen" component={ApiScreen}/>
//           <Stack.Screen name="AxiosScreen" component={AxiosScreen}/>
//           <Stack.Screen name="LiveData" component={AxiosLiveData}/>
//           <Stack.Screen name="PostData" component={PostData}/>
//           <Stack.Screen name="NoteItem" component={NoteItem} options={{ headerShown: false }} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </Provider>
//   );
// }

// export default App;

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { Provider } from "react-redux";
// import { store, persistor } from './src/redux/Store';
// import NumCounter from './src/NumCounter';
// import { PersistGate } from 'redux-persist/integration/react';

// const Stack = createNativeStackNavigator();

// const App = () => {
//   return (
//     <Provider store={store}>
//       <PersistGate loading={null} persistor={persistor}>
//         <NavigationContainer>
//           <Stack.Navigator>
//             <Stack.Screen name="NumCounter" component={NumCounter} />
//           </Stack.Navigator>
//         </NavigationContainer>
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// import React from 'react';
// import { View, Text, Image, TextInput } from 'react-native';
// import { Provider } from 'react-redux'; 
// import store,{persistor} from './src/redux/Store'; 
// import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler';
// import AppNavigation from './src/navigations/appNavigation/AppNavigation'
// import { PersistGate } from 'redux-persist/integration/react';
// import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';



// const App = () => {
  
//   return (
//     <Provider store={store}> 
//        <PersistGate loading={null} persistor={persistor}>
//         <AuthNavigation/>
//       <AppNavigation />
//     </PersistGate>
//     </Provider>
//   );
// };

// export default App;

// import React from "react";
// import { View, Text, Button } from "react-native";

// const App =()=> {

//   return (
//     <>
//       <View>
//         <Text>Hello World</Text>
//         <Button title="Press Me" onPress={() => alert('Button Pressed')} />
//       </View>
//     </>
//   )
// }
// export default App;




















































































import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'; 
import store, { persistor } from './src/redux/Store'; 
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage'; // AsyncStorage इंपोर्ट करें
import AuthNavigation from './src/navigations/authNavigation/AuthNavigation';
import AppNavigation from './src/navigations/appNavigation/AppNavigation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [loading, setLoading] = useState(true); 

  
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const status = await AsyncStorage.getItem('isLoggedIn');
        if (status === 'true') {
          setIsLoggedIn(true);
        }
      } catch (error) {
        console.error('Error fetching login status:', error);
      } finally {
        setLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  if (loading) {
    return null; // डेटा लोड होने तक कुछ न दिखाएँ
  }

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
         <AppNavigation /> 
      </PersistGate>
    </Provider>
  );
};

export default App;



// import React from "react";
// import { AuthProvider } from "./src/navigations/AuthContext ";
// import RootNavigation from "./src/RootNavigation";
// import AppNavigation from "./src/navigations/appNavigation/AppNavigation";

// const App = () => {
//   return (
//     <AuthProvider>
//       <AppNavigation />
//     </AuthProvider>
//   );
// };

// export default App;

// HomeScreen.js
// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://example.com/electronics.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://example.com/clothing.jpg' },
//   { id: '3', name: 'Groceries', image: 'https://example.com/groceries.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://example.com/beauty.jpg' },
// ];

// const products = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://example.com/laptop.jpg' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://example.com/phone.jpg' },
//   { id: '3', name: 'Shirt', price: '$29', image: 'https://example.com/shirt.jpg' },
//   { id: '4', name: 'Shoes', price: '$49', image: 'https://example.com/shoes.jpg' },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello, Welcome</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
//           <Icon name="shopping-cart" size={30} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Categories Section */}
//       <Text style={styles.sectionTitle}>Categories</Text>
//       <FlatList
//         horizontal
//         data={categories}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.categoryCard}>
//             <Image source={{ uri: item.image }} style={styles.categoryImage} />
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />

//       {/* Products Grid */}
//       <Text style={styles.sectionTitle}>Featured Products</Text>
//       <FlatList
//         numColumns={2}
//         data={products}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#6200ee',
//     paddingTop: 40,
//     paddingBottom: 10,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   sectionTitle: {
//     fontSize: 18,
//     fontWeight: '600',
//     marginVertical: 10,
//     marginLeft: 20,
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: 'center',
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   categoryText: {
//     marginTop: 5,
//     fontWeight: 'bold',
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 10,
//     padding: 10,
//     width: '45%',
//     alignItems: 'center',
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//   },
//   productName: {
//     fontWeight: 'bold',
//     marginTop: 10,
//   },
//   productPrice: {
//     color: '#6200ee',
//     marginTop: 5,
//   },
// });

// export default HomeScreen;
// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsuQYVeYJiIhKDfE0S3aj4lE53b6zzf5wg&s' },
//   { id: '3', name: 'Groceries', image: 'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://example.com/beauty.jpg' },
// ];

// const products = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://lh3.googleusercontent.com/-nOQJXQZImclANpiqN0poMNN1O9cPPT9L0B1W02squjMHw3bvV86ecJkimd9629DLb6zr359vbavqFPZCEXDltiSAYFtXPgFpFM' },
//   { id: '3', name: 'Shirt', price: '$29', image: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470192/item/ingoods_03_470192_3x4.jpg?width=288' },
//   { id: '4', name: 'Shoes', price: '$49', image: 'https://www.converse.in/media/catalog/product/a/1/a12069c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg' },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <Text style={styles.greeting}>Hello, Welcome</Text>
//         <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.cartIcon}>
//           <Icon name="shopping-cart" size={30} color="#fff" />
//         </TouchableOpacity>
//       </View>

//       {/* Categories Section */}
//       <Text style={styles.sectionTitle}>Categories</Text>
//       <FlatList
//         horizontal
//         data={categories}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.categoryCard}>
//             <Image source={{ uri: item.image }} style={styles.categoryImage} />
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//       />

//       {/* Products Grid */}
//       <Text style={styles.sectionTitle}>Featured Products</Text>
//       <FlatList
//         numColumns={2}
//         data={products}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#6200ee',
//     paddingTop: 40,
//     paddingBottom: 15,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomWidth: 1,
//     borderBottomColor: '#ccc',
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   cartIcon: {
//     padding: 10,
//     backgroundColor: '#03dac6',
//     borderRadius: 50,
//     elevation: 3, // shadow for Android
//   },    
//   sectionTitle: {
//     fontSize: 20,
//     fontWeight: '700',
//     marginVertical: 15,
//     marginLeft: 20,
//     color: '#333',
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: 'center',
//     borderRadius: 15,
//     backgroundColor: '#fff',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 8,
//     elevation: 5, // for Android shadow
//     padding: 10,
//     marginBottom: 20,
//   },
//   categoryImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 15,
//   },
//   categoryText: {
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#6200ee',
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     margin: 10,
//     padding: 15,
//     width: '45%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOpacity: 0.1,
//     shadowOffset: { width: 0, height: 5 },
//     shadowRadius: 10,
//     elevation: 3, // for Android shadow
//   },
//   productImage: {
//     width: 140,
//     height: 140,
//     borderRadius: 15,
//   },
//   productName: {
//     fontWeight: '600',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   productPrice: {
//     color: '#03dac6',
//     fontWeight: '700',
//     marginTop: 5,
//   },
// });

// export default HomeScreen;
// import React from "react";
// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsuQYVeYJiIhKDfE0S3aj4lE53b6zzf5wg&s' },
//   { id: '3', name: 'Groceries', image: 'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz4lSOAcyN2CBPghpP8mcJFL1zHgwUg9z9Q&s' },
// ];

// const products = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://lh3.googleusercontent.com/-nOQJXQZImclANpiqN0poMNN1O9cPPT9L0B1W02squjMHw3bvV86ecJkimd9629DLb6zr359vbavqFPZCEXDltiSAYFtXPgFpFM' },
//   { id: '3', name: 'Shirt', price: '$29', image: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470192/item/ingoods_03_470192_3x4.jpg?width=288' },
//   { id: '4', name: 'Shoes', price: '$49', image: 'https://www.converse.in/media/catalog/product/a/1/a12069c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg' },
// ];
// const HomeScreen = () => (
//   <View style={styles.container}>
//     {/* Header */}
//     <View style={styles.header}>
//       <View style={styles.headerContent}>
//         <Text style={styles.greeting}>Hello, Welcome 👋</Text>
//         <Text style={styles.subGreeting}>Discover amazing products</Text>
//       </View>
//       <View style={styles.headerIcons}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon name="user" size={20} color="#6200ee" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon name="shopping-cart" size={20} color="#6200ee" />
//         </TouchableOpacity>
//       </View>
//     </View>

//     {/* Categories Section */}
//     <Text style={styles.sectionTitle}>Categories</Text>
//     <FlatList
//       horizontal
//       data={categories}
//       renderItem={({ item }) => (
//         <TouchableOpacity style={styles.categoryCard}>
//           <Image source={{ uri: item.image }} style={styles.categoryImage} />
//           <Text style={styles.categoryText}>{item.name}</Text>
//         </TouchableOpacity>
//       )}
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.categoriesContainer}
//     />

//     {/* Products Grid */}
//     <Text style={styles.sectionTitle}>Featured Products</Text>
//     <FlatList
//       numColumns={2}
//       data={products}
//       renderItem={({ item }) => (
//         <View style={styles.productCard}>
//           <Image source={{ uri: item.image }} style={styles.productImage} />
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>{item.price}</Text>
//           <TouchableOpacity style={styles.buyButton}>
//             <Text style={styles.buyButtonText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       keyExtractor={(item) => item.id}
//       showsVerticalScrollIndicator={false}
//     />
//   </View>
// );

// const CartScreen = () => (
//   <View style={styles.center}>
//     <Text>Cart Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={styles.center}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const SettingsScreen = () => (
//   <View style={styles.center}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           const icons = {
//             Home: "home",
//             Cart: "shopping-cart",
//             Profile: "user",
//             Settings: "cog",
//           };
//           return <Icon name={icons[route.name]} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#6200ee",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: { backgroundColor: "#fff", elevation: 10 },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Cart" component={CartScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f1f1f1",
//   },
//   header: {
//     backgroundColor: "orange",
//     paddingTop: 40,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     elevation: 5,
//   },
//   headerContent: {
//     flex: 1,
//   },
//   greeting: {
//     color: "#333",
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   subGreeting: {
//     color: "#666",
//     fontSize: 14,
//     marginTop: 5,
//   },
//   headerIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconButton: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 50,
//     marginHorizontal: 5,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginVertical: 15,
//     marginLeft: 20,
//     color: "#333",
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: "center",
//     borderRadius: 15,
//     backgroundColor: "#fff",
//     padding: 10,
//     elevation: 4,
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10, 
//   },
//   categoryText: {
//     marginTop: 10,
//     fontWeight: "600",
//     fontSize: 16,
//     color: "#6200ee",
//   },
//   productCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     margin: 10,
//     padding: 15,
//     width: "45%",
//     alignItems: "center",
//     elevation: 5,
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//   },
//   productName: {
//     fontWeight: "600",
//     marginTop: 10,
//     fontSize: 16,
//     color: "#333",
//   },
//   productPrice: {
//     color: "#03dac6",
//     fontWeight: "700",
//     marginTop: 5,
//     fontSize: 14,
//   },
//   buyButton: {
//     marginTop: 10,
//     backgroundColor: "#6200ee",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     elevation: 4,
//   },
//   buyButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 14,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;


// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsuQYVeYJiIhKDfE0S3aj4lE53b6zzf5wg&s' },
//   { id: '3', name: 'Groceries', image: 'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz4lSOAcyN2CBPghpP8mcJFL1zHgwUg9z9Q&s' },
// ];

// const featuredProducts = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://lh3.googleusercontent.com/-nOQJXQZImclANpiqN0poMNN1O9cPPT9L0B1W02squjMHw3bvV86ecJkimd9629DLb6zr359vbavqFPZCEXDltiSAYFtXPgFpFM' },
//   { id: '1', name: 'Toy', price: '$99', image: 'https://content.jdmagicbox.com/comp/def_content/toy-dealers/shutterstock-436617280-toy-dealers-5-02u2p.jpg' },
//   { id: '2', name: 'EarBuds', price: '$79', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUW03?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296134821' },

// ];

// const trendingProducts = [
//   { id: '1', name: 'Headphones', price: '$199', image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Pro.jpg?v=1682579854' },
//   { id: '2', name: 'Smartwatch', price: '$149', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30049622/2024/7/17/ec341fc9-c920-425a-8a18-5c9e6fb41d681721200206444-pebble-Dome-152-Spherical-Amoled-Display-Premium-Metal-Built-1.jpg' },
// ];

// const exclusiveDeals = [
//   { id: '1', name: 'Gaming Console', price: '$399', image: 'https://cdn.mos.cms.futurecdn.net/fSmrSBjdYTTjRLehJeamUY.jpg' },
//   { id: '2', name: 'Camera', price: '$299', image: 'https://m.media-amazon.com/images/I/61meFc8fAyL._SX679_.jpg' },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerContent}>
//           <Text style={styles.greeting}>Hello, Welcome 👋</Text>
//           <Text style={styles.subGreeting}>Discover amazing products</Text>
//         </View>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="user" size={20} color="#6200ee" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.iconButton}>
//             <Icon name="shopping-cart" size={20} color="#6200ee" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Categories Section */}
//       <Text style={styles.sectionTitle}>Categories</Text>
//       <FlatList
//         horizontal
//         data={categories}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.categoryCard}>
//             <Image source={{ uri: item.image }} style={styles.categoryImage} />
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.categoriesContainer}
//       />

//       {/* Featured Products Section */}
//       <Text style={styles.sectionTitle}>Featured Products</Text>
//       <FlatList
//         numColumns={2}
//         data={featuredProducts}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <TouchableOpacity style={styles.buyButton}>
//               <Text style={styles.buyButtonText}>Buy Now</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Trending Products Section */}
//       <Text style={styles.sectionTitle}>Trending Products</Text>
//       <FlatList
//         horizontal
//         data={trendingProducts}
//         renderItem={({ item }) => (
//           <View style={styles.dealCard}>
//             <Image source={{ uri: item.image }} style={styles.dealImage} />
//             <Text style={styles.dealName}>{item.name}</Text>
//             <Text style={styles.dealPrice}>{item.price}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.dealsContainer}
//       />

//       {/* Exclusive Deals Section */}
//       <Text style={styles.sectionTitle}>Exclusive Deals</Text>
//       <FlatList
//         numColumns={2}
//         data={exclusiveDeals}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <TouchableOpacity style={styles.buyButton}>
//               <Text style={styles.buyButtonText}>Buy Now</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f9f9f9',
//   },
//   header: {
//     backgroundColor: 'orange',
//     paddingTop: 40,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//   },
//   headerContent: {
//     flex: 1,
//   },
//   greeting: {
//     color: '#333',
//     fontSize: 22,
//     fontWeight: 'bold',
//   },
//   subGreeting: {
//     color: '#666',
//     fontSize: 14,
//     marginTop: 5,
//   },
//   headerIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 50,
//     marginHorizontal: 5,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '700',
//     marginVertical: 15,
//     marginLeft: 20,
//     color: '#333',
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 10,
//     marginBottom: 20,
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   categoryText: {
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#6200ee',
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 10,
//     padding: 15,
//     width: '45%',
//     alignItems: 'center',
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//   },
//   productName: {
//     fontWeight: '600',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   productPrice: {
//     color: '#03dac6',
//     fontWeight: '700',
//     marginTop: 5,
//     fontSize: 14,
//   },
//   buyButton: {
//     marginTop: 10,
//     backgroundColor: '#6200ee',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   buyButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   dealCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginLeft: 20,
//     padding: 10,
//     width: 150,
//     alignItems: 'center',
//   },
//   dealImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   dealName: {
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#333',
//   },
//   dealPrice: {
//     color: '#03dac6',
//     fontWeight: '700',
//     marginTop: 5,
//     fontSize: 14,
//   },
//   categoriesContainer: {
//     paddingVertical: 10,
//   },
//   dealsContainer: {
//     paddingVertical: 10,
//   },
// });

// export default HomeScreen;
// import React from "react";
// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsuQYVeYJiIhKDfE0S3aj4lE53b6zzf5wg&s' },
//   { id: '3', name: 'Groceries', image: 'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz4lSOAcyN2CBPghpP8mcJFL1zHgwUg9z9Q&s' },
// ];

// const featuredProducts = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://lh3.googleusercontent.com/-nOQJXQZImclANpiqN0poMNN1O9cPPT9L0B1W02squjMHw3bvV86ecJkimd9629DLb6zr359vbavqFPZCEXDltiSAYFtXPgFpFM' },
//   { id: '3', name: 'Toy', price: '$99', image: 'https://content.jdmagicbox.com/comp/def_content/toy-dealers/shutterstock-436617280-toy-dealers-5-02u2p.jpg' },
//   { id: '4', name: 'EarBuds', price: '$79', image: 'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MUW03?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1713296134821' },
// ];

// const trendingProducts = [
//   { id: '1', name: 'Headphones', price: '$199', image: 'https://cdn.shopify.com/s/files/1/0057/8938/4802/files/boAt-Rockerz-450-Pro.jpg?v=1682579854' },
//   { id: '2', name: 'Smartwatch', price: '$149', image: 'https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/30049622/2024/7/17/ec341fc9-c920-425a-8a18-5c9e6fb41d681721200206444-pebble-Dome-152-Spherical-Amoled-Display-Premium-Metal-Built-1.jpg' },
// ];

// const exclusiveDeals = [
//   { id: '1', name: 'Gaming Console', price: '$399', image: 'https://cdn.mos.cms.futurecdn.net/fSmrSBjdYTTjRLehJeamUY.jpg' },
//   { id: '2', name: 'Camera', price: '$299', image: 'https://m.media-amazon.com/images/I/61meFc8fAyL._SX679_.jpg' },
// ];

// const HomeScreen = ({ navigation }) => {
//   return (
//     <ScrollView style={styles.container}>
//       {/* Header */}
//       <View style={styles.header}>
//         <View style={styles.headerContent}>
//           <Text style={styles.greeting}>Hello, Welcome 👋</Text>
//           <Text style={styles.subGreeting}>Discover amazing products</Text>
//         </View>
//         <View style={styles.headerIcons}>
//           <TouchableOpacity style={styles.iconButton}>
//             <Icon name="user" size={20} color="#fff" />
//           </TouchableOpacity>
//           <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.iconButton}>
//             <Icon name="shopping-cart" size={20} color="#fff" />
//           </TouchableOpacity>
//         </View>
//       </View>

//       {/* Categories Section */}
//       <Text style={styles.sectionTitle}>Categories</Text>
//       <FlatList
//         horizontal
//         data={categories}
//         renderItem={({ item }) => (
//           <TouchableOpacity style={styles.categoryCard}>
//             <Image source={{ uri: item.image }} style={styles.categoryImage} />
//             <Text style={styles.categoryText}>{item.name}</Text>
//           </TouchableOpacity>
//         )}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.categoriesContainer}
//       />

//       {/* Featured Products Section */}
//       <Text style={styles.sectionTitle}>Featured Products</Text>
//       <FlatList
//         numColumns={2}
//         data={featuredProducts}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <TouchableOpacity style={styles.buyButton}>
//               <Text style={styles.buyButtonText}>Buy Now</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />

//       {/* Trending Products Section */}
//       <Text style={styles.sectionTitle}>Trending Products</Text>
//       <FlatList
//         horizontal
//         data={trendingProducts}
//         renderItem={({ item }) => (
//           <View style={styles.dealCard}>
//             <Image source={{ uri: item.image }} style={styles.dealImage} />
//             <Text style={styles.dealName}>{item.name}</Text>
//             <Text style={styles.dealPrice}>{item.price}</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsHorizontalScrollIndicator={false}
//         contentContainerStyle={styles.dealsContainer}
//       />

//       {/* Exclusive Deals Section */}
//       <Text style={styles.sectionTitle}>Exclusive Deals</Text>
//       <FlatList
//         numColumns={2}
//         data={exclusiveDeals}
//         renderItem={({ item }) => (
//           <View style={styles.productCard}>
//             <Image source={{ uri: item.image }} style={styles.productImage} />
//             <Text style={styles.productName}>{item.name}</Text>
//             <Text style={styles.productPrice}>{item.price}</Text>
//             <TouchableOpacity style={styles.buyButton}>
//               <Text style={styles.buyButtonText}>Buy Now</Text>
//             </TouchableOpacity>
//           </View>
//         )}
//         keyExtractor={(item) => item.id}
//         showsVerticalScrollIndicator={false}
//       />
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f4f4f4',
//   },
//   header: {
//     backgroundColor: '#6200ee',
//     paddingTop: 40,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   headerContent: {
//     flex: 1,
//   },
//   greeting: {
//     color: '#fff',
//     fontSize: 24,
//     fontWeight: '700',
//   },
//   subGreeting: {
//     color: '#fff',
//     fontSize: 14,
//     marginTop: 5,
//   },
//   headerIcons: {
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   iconButton: {
//     backgroundColor: '#f0f0f0',
//     padding: 10,
//     borderRadius: 50,
//     marginHorizontal: 5,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: '600',
//     marginVertical: 15,
//     marginLeft: 20,
//     color: '#333',
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: 'center',
//     backgroundColor: '#fff',
//     borderRadius: 15,
//     padding: 10,
//     marginBottom: 20,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4,
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 15,
//   },
//   categoryText: {
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#6200ee',
//   },
//   productCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     margin: 10,
//     padding: 15,
//     width: '45%',
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//   },
//   productName: {
//     fontWeight: '600',
//     marginTop: 10,
//     fontSize: 16,
//     color: '#333',
//   },
//   productPrice: {
//     color: '#03dac6',
//     fontWeight: '700',
//     marginTop: 5,
//     fontSize: 14,
//   },
//   buyButton: {
//     marginTop: 10,
//     backgroundColor: '#6200ee',
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//   },
//   buyButtonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 14,
//   },
//   dealCard: {
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     marginLeft: 20,
//     padding: 10,
//     width: 150,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.1,
//     shadowRadius: 6,
//   },
//   dealImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10,
//   },
//   dealName: {
//     marginTop: 10,
//     fontWeight: '600',
//     fontSize: 16,
//     color: '#333',
//   },
//   dealPrice: {
//     color: '#03dac6',
//     fontWeight: '700',
//     marginTop: 5,
//     fontSize: 14,
//   },
//   categoriesContainer: {
//     paddingVertical: 10,
//   },
//   dealsContainer: {
//     paddingVertical: 10,
//   },
// });

// export default HomeScreen;

























// import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import { NavigationContainer } from "@react-navigation/native";
// import Icon from "react-native-vector-icons/FontAwesome";

// const categories = [
//   { id: '1', name: 'Electronics', image: 'https://t4.ftcdn.net/jpg/03/64/41/07/360_F_364410756_Ev3WoDfNyxO9c9n4tYIsU5YBQWAP3UF8.jpg' },
//   { id: '2', name: 'Clothing', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBMsuQYVeYJiIhKDfE0S3aj4lE53b6zzf5wg&s' },
//   { id: '3', name: 'Groceries', image: 'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg' },
//   { id: '4', name: 'Beauty', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnz4lSOAcyN2CBPghpP8mcJFL1zHgwUg9z9Q&s' },
// ];

// const products = [
//   { id: '1', name: 'Laptop', price: '$999', image: 'https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/PDP-Highlight-Surface-Laptop-Go-2-Ice-Blue:VP2-859x540' },
//   { id: '2', name: 'Phone', price: '$799', image: 'https://lh3.googleusercontent.com/-nOQJXQZImclANpiqN0poMNN1O9cPPT9L0B1W02squjMHw3bvV86ecJkimd9629DLb6zr359vbavqFPZCEXDltiSAYFtXPgFpFM' },
//   { id: '3', name: 'Shirt', price: '$29', image: 'https://image.uniqlo.com/UQ/ST3/in/imagesgoods/470192/item/ingoods_03_470192_3x4.jpg?width=288' },
//   { id: '4', name: 'Shoes', price: '$49', image: 'https://www.converse.in/media/catalog/product/a/1/a12069c_a_107x1.jpg?optimize=medium&bg-color=255%2C255%2C255&fit=cover&height=375&width=840&auto=webp&format=pjpg' },
// ];
// const HomeScreen = () => (
//   <View style={styles.container}>
//     {/* Header */}
//     <View style={styles.header}>
//       <View style={styles.headerContent}>
//         <Text style={styles.greeting}>Hello, Welcome 👋</Text>
//         <Text style={styles.subGreeting}>Discover amazing products</Text>
//       </View>
//       <View style={styles.headerIcons}>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon name="user" size={20} color="#6200ee" />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.iconButton}>
//           <Icon name="shopping-cart" size={20} color="#6200ee" />
//         </TouchableOpacity>
//       </View>
//     </View>

//     {/* Categories Section */}
//     <Text style={styles.sectionTitle}>Categories</Text>
//     <FlatList
//       horizontal
//       data={categories}
//       renderItem={({ item }) => (
//         <TouchableOpacity style={styles.categoryCard}>
//           <Image source={{ uri: item.image }} style={styles.categoryImage} />
//           <Text style={styles.categoryText}>{item.name}</Text>
//         </TouchableOpacity>
//       )}
//       keyExtractor={(item) => item.id}
//       showsHorizontalScrollIndicator={false}
//       contentContainerStyle={styles.categoriesContainer}
//     />

//     {/* Products Grid */}
//     <Text style={styles.sectionTitle}>Featured Products</Text>
//     <FlatList
//       numColumns={2}
//       data={products}
//       renderItem={({ item }) => (
//         <View style={styles.productCard}>
//           <Image source={{ uri: item.image }} style={styles.productImage} />
//           <Text style={styles.productName}>{item.name}</Text>
//           <Text style={styles.productPrice}>{item.price}</Text>
//           <TouchableOpacity style={styles.buyButton}>
//             <Text style={styles.buyButtonText}>Buy Now</Text>
//           </TouchableOpacity>
//         </View>
//       )}
//       keyExtractor={(item) => item.id}
//       showsVerticalScrollIndicator={false}
//     />
//   </View>
// );

// const CartScreen = () => (
//   <View style={styles.center}>
//     <Text>Cart Screen</Text>
//   </View>
// );

// const ProfileScreen = () => (
//   <View style={styles.center}>
//     <Text>Profile Screen</Text>
//   </View>
// );

// const SettingsScreen = () => (
//   <View style={styles.center}>
//     <Text>Settings Screen</Text>
//   </View>
// );

// const Tab = createBottomTabNavigator();

// const App = () => (
//   <NavigationContainer>
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color, size }) => {
//           const icons = {
//             Home: "home",
//             Cart: "shopping-cart",
//             Profile: "user",
//             Settings: "cog",
//           };
//           return <Icon name={icons[route.name]} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "#6200ee",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: { backgroundColor: "#fff", elevation: 10 },
//       })}
//     >
//       <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
//       <Tab.Screen name="Cart" component={CartScreen} />
//       <Tab.Screen name="Profile" component={ProfileScreen} />
//       <Tab.Screen name="Settings" component={SettingsScreen} />
//     </Tab.Navigator>
//   </NavigationContainer>
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f1f1f1",
//   },
//   header: {
//     backgroundColor: "orange",
//     paddingTop: 40,
//     paddingBottom: 20,
//     paddingHorizontal: 20,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     borderBottomLeftRadius: 15,
//     borderBottomRightRadius: 15,
//     elevation: 5,
//   },
//   headerContent: {
//     flex: 1,
//   },
//   greeting: {
//     color: "#333",
//     fontSize: 22,
//     fontWeight: "bold",
//   },
//   subGreeting: {
//     color: "#666",
//     fontSize: 14,
//     marginTop: 5,
//   },
//   headerIcons: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   iconButton: {
//     backgroundColor: "#fff",
//     padding: 10,
//     borderRadius: 50,
//     marginHorizontal: 5,
//     elevation: 3,
//   },
//   sectionTitle: {
//     fontSize: 22,
//     fontWeight: "700",
//     marginVertical: 15,
//     marginLeft: 20,
//     color: "#333",
//   },
//   categoryCard: {
//     marginLeft: 20,
//     alignItems: "center",
//     borderRadius: 15,
//     backgroundColor: "#fff",
//     padding: 10,
//     elevation: 4,
//   },
//   categoryImage: {
//     width: 100,
//     height: 100,
//     borderRadius: 10, 
//   },
//   categoryText: {
//     marginTop: 10,
//     fontWeight: "600",
//     fontSize: 16,
//     color: "#6200ee",
//   },
//   productCard: {
//     backgroundColor: "#fff",
//     borderRadius: 10,
//     margin: 10,
//     padding: 15,
//     width: "45%",
//     alignItems: "center",
//     elevation: 5,
//   },
//   productImage: {
//     width: 120,
//     height: 120,
//     borderRadius: 10,
//   },
//   productName: {
//     fontWeight: "600",
//     marginTop: 10,
//     fontSize: 16,
//     color: "#333",
//   },
//   productPrice: {
//     color: "#03dac6",
//     fontWeight: "700",
//     marginTop: 5,
//     fontSize: 14,
//   },
//   buyButton: {
//     marginTop: 10,
//     backgroundColor: "#6200ee",
//     borderRadius: 8,
//     paddingHorizontal: 15,
//     paddingVertical: 8,
//     elevation: 4,
//   },
//   buyButtonText: {
//     color: "#fff",
//     fontWeight: "600",
//     fontSize: 14,
//   },
//   center: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });

// export default App;























// import React from "react";
// import { AuthProvider } from "./src/navigations/AuthContext ";
// import RootNavigation from "./src/RootNavigation";
// import AppNavigation from "./src/navigations/appNavigation/AppNavigation";

// const App = () => {
//   return (
//     <AuthProvider>
//       <AppNavigation />
//     </AuthProvider>
//   );
// };

// export default App;