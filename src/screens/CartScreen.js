// import React from "react";
// import { View, Text, FlatList, Image } from "react-native";
// import { useSelector, useDispatch } from "react-redux";
// import { GestureHandlerRootView, TouchableOpacity } from "react-native-gesture-handler";
// import { removeItemFromCart } from "../redux/featurs/cartSlice/CartSliceProduct";
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const CatScreen = () => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeItemFromCart(id));
//   };

//   return (
//     <GestureHandlerRootView>
//       <View>
        
//         {cartItems.length > 0 ? (
//           <FlatList
//             data={cartItems}
//             keyExtractor={(item, index) => index.toString()}
//             showsHorizontalScrollIndicator={true}
//             renderItem={({ item }) => (
//               <View
//                 style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-evenly',
//                   backgroundColor: '#e0d1e5e0',
//                   borderRadius: 20,
//                   paddingVertical: 5,
//                   margin: 5
//                 }}>
//                 <View>
//                   <Image
//                     source={{
//                       uri: item.image,
//                     }}
//                     style={{ width: 100, height: 100, resizeMode: 'contain', borderRadius: 20 }}
//                   />
//                 </View>
//                 <View style={{ marginLeft: 0 ,marginRight:50}}>
//                   <Text style={{ fontSize: 20, color: '#000' }}>{item.name}</Text>
//                   <Text style={{ fontSize: 13 }}>{item.price}</Text>
//                   <Text style={{ fontSize: 15 }}>Rating 4.5</Text>
//                 </View>
//                 <View>
//                   <TouchableOpacity
//                     style={{ backgroundColor: 'red', borderRadius: 15 }}
//                     onPress={() => {handleRemoveFromCart(item),console.log(item)}} 
//                   >
//                     <Text
//                       style={{
//                         paddingHorizontal: 10,
//                         paddingVertical: 5,
//                         textAlign: 'center',
//                         color: 'white',
//                       }}>
//                       Remove
//                     </Text>
//                   </TouchableOpacity>
                 
//                 </View>
//               </View>
//             )}
//           />
//         ) : (
//           <View style={{alignItems:'center',justifyContent:'center',marginTop:100}}>
//             <Image
//             source={{uri:'https://cdn-icons-png.flaticon.com/512/1199/1199716.png'}}
//             style={{width:200,height:200}}/>
//             <Text style={{fontSize:25,fontWeight:'bold',marginTop:20,}}>No items in cart.</Text>
//          </View>
//         )}
//       </View>
//     </GestureHandlerRootView>
//   );
// };

// export default CatScreen;

import React from "react";
import { View, Text, FlatList, Image, TextInput } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { GestureHandlerRootView, ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { removeItemFromCart, incrementQuantity, decrementQuantity } from "../redux/featurs/cartSlice/CartSliceProduct";
import BottomTab from "../navigations/appNavigation/BottomNavigation";

// const CatScreen = ({navigation}) => {
//   const cartItems = useSelector((state) => state.cart.items);
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     console.log("Removing item with id:", id);
//     dispatch(removeItemFromCart(id));
//   };

//   const handleIncrement = (id) => {
//     dispatch(incrementQuantity(id));
//   };

//   const handleDecrement = (id) => {
//     dispatch(decrementQuantity(id));
//   };

  
//   const totalPrice = cartItems.reduce((sum, item) => {
//     const itemPrice = parseFloat(item.price.replace('$', ''));
//     return sum + itemPrice * (item.quantity || 1);
//   }, 0);

//   return (
//     <GestureHandlerRootView>
//      <ScrollView>
//      <View style={{ flex: 1, padding: 10 }}>
//         {cartItems.length > 0 ? (
//           <>
//             <FlatList
//               data={cartItems}
//               keyExtractor={(item, index) => index.toString()}
//               showsHorizontalScrollIndicator={false}
//               renderItem={({ item }) => (
//                 <View style={{
//                   flexDirection: 'row',
//                   alignItems: 'center',
//                   justifyContent: 'space-evenly',
//                   backgroundColor: '#e0d1e5e0',
//                   borderRadius: 20,
//                   paddingVertical: 5,
//                   marginVertical: 5,
//                 }}>
//                   <Image
//                     source={{ uri: item.image }}
//                     style={{
//                       width: 100,
//                       height: 100,
//                       resizeMode: 'contain',
//                       borderRadius: 20,
//                     }}
//                   />
//                   <View style={{ flex: 1, marginLeft: 10 }}>
//                     <Text style={{ fontSize: 18, color: '#000', fontWeight: 'bold' }}>{item.name}</Text>
//                     <Text style={{ fontSize: 15, color: '#333' }}>{item.price}</Text>
//                     <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
//                       <TouchableOpacity onPress={() => handleDecrement(item.id)}>
//                         <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>-</Text>
//                       </TouchableOpacity>
//                       <TextInput
//                         value={item.quantity.toString()}
//                         editable={false}
//                         style={{
//                           width: 40,
//                           height: 40,
//                           backgroundColor: '#fff',
//                           textAlign: 'center',
//                           fontSize: 18,
//                           color: 'red',
//                           borderRadius: 5,
//                         }}
//                       />
//                       <TouchableOpacity onPress={() => handleIncrement(item.id)}>
//                         <Text style={{ fontSize: 20, marginHorizontal: 10, fontWeight: 'bold' }}>+</Text>
//                       </TouchableOpacity>
//                     </View>
//                   </View>
//                   <TouchableOpacity
//                     style={{
//                       backgroundColor: 'red',
//                       borderRadius: 15,
//                       paddingHorizontal: 10,
//                       paddingVertical: 5,
//                       marginRight:20,
//                     }}
//                     onPress={() => handleRemoveFromCart(item.id)}
//                   >
//                     <Text style={{ color: 'white', textAlign: 'center' }}>Remove</Text>
//                   </TouchableOpacity>
//                 </View>
//               )}
//             />
//             <View style={{
//               alignItems: 'center',
//               paddingVertical: 20,
//               borderTopWidth: 1,
//               borderColor: '#ccc',
//             }}>
//               <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333' }}>Total: ${totalPrice.toFixed(2)}</Text>
//               <View>
//                 <TouchableOpacity
//                 onPress={() =>
//                   navigation.navigate('BuyItemScreen', {
//                     items: cartItems,
//                     total: totalPrice.toFixed(2),
//                   })
//                 }
//                   style={{
//                     backgroundColor: '#e0d1e5e0',
//                     borderRadius: 15,
//                     paddingHorizontal: 20,
//                     paddingVertical: 10,
//                     marginTop:10,
//                   }}
//                 >
//                   <Text style={{ color: '#000', textAlign: 'center',fontWeight:700 }}>Buy Items</Text>
//                 </TouchableOpacity>
//               </View>
//             </View>
//           </>
//         ) : (
//           <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
//             <Image
//               source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1199/1199716.png' }}
//               style={{ width: 200, height: 200 }}
//             />
//             <Text style={{ fontSize: 25, fontWeight: 'bold', marginTop: 20 }}>No items in cart.</Text>
//           </View>
//         )}
//       </View>
//      </ScrollView>
//       <BottomTab />
//     </GestureHandlerRootView>
   
//   );
// };

// export default CatScreen;
const CatScreen = ({ navigation }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  const totalPrice = cartItems.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price.replace('$', ''));
    return sum + itemPrice * (item.quantity || 1);
  }, 0);

  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: '#f8f9fa' }}>
      <ScrollView>
        <View style={{ flex: 1, padding: 15 }}>
          {cartItems.length > 0 ? (
            <>
              <FlatList
                data={cartItems}
                keyExtractor={(item, index) => index.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      backgroundColor: '#ffffff',
                      borderRadius: 10,
                      padding: 15,
                      marginVertical: 10,
                      shadowColor: '#000',
                      shadowOffset: { width: 0, height: 2 },
                      shadowOpacity: 0.1,
                      shadowRadius: 4,
                      elevation: 3,
                    }}
                  >
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: 80,
                        height: 80,
                        borderRadius: 8,
                        resizeMode: 'cover',
                      }}
                    />
                    <View style={{ flex: 1, marginLeft: 15 }}>
                      <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#333' }}>{item.name}</Text>
                      <Text style={{ fontSize: 14, color: '#777', marginTop: 5 }}>{item.price}</Text>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          marginTop: 10,
                        }}
                      >
                        <TouchableOpacity
                          onPress={() => handleDecrement(item.id)}
                          style={{
                            backgroundColor: '#dee2e6',
                            borderRadius: 5,
                            padding: 8,
                          }}
                        >
                          <Text style={{ fontSize: 18, color: '#495057' }}>-</Text>
                        </TouchableOpacity>
                        <TextInput
                          value={item.quantity.toString()}
                          editable={false}
                          style={{
                            width: 40,
                            height: 40,
                            textAlign: 'center',
                            marginHorizontal: 10,
                            fontSize: 16,
                            color: '#495057',
                            borderWidth: 1,
                            borderColor: '#ced4da',
                            borderRadius: 5,
                            backgroundColor: '#f8f9fa',
                          }}
                        />
                        <TouchableOpacity
                          onPress={() => handleIncrement(item.id)}
                          style={{
                            backgroundColor: '#dee2e6',
                            borderRadius: 5,
                            padding: 8,
                          }}
                        >
                          <Text style={{ fontSize: 18, color: '#495057' }}>+</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <TouchableOpacity
                      onPress={() => handleRemoveFromCart(item.id)}
                      style={{
                        backgroundColor: '#ff6b6b',
                        borderRadius: 5,
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                      }}
                    >
                      <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Remove</Text>
                    </TouchableOpacity>
                  </View>
                )}
              />
              <View
                style={{
                  marginTop: 20,
                  padding: 15,
                  backgroundColor: '#ffffff',
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.1,
                  shadowRadius: 4,
                  elevation: 3,
                }}
              >
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333', textAlign: 'center' }}>
                  Total: ${totalPrice.toFixed(2)}
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('BuyItemScreen', {
                      items: cartItems,
                      total: totalPrice.toFixed(2),
                    })
                  }
                  style={{
                    marginTop: 15,
                    backgroundColor: '#51cf66',
                    borderRadius: 5,
                    paddingVertical: 12,
                    paddingHorizontal: 20,
                  }}
                >
                  <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>
                    Proceed to Checkout
                  </Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 100 }}>
              <Image
                source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1199/1199716.png' }}
                style={{ width: 200, height: 200 }}
              />
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#333', marginTop: 20 }}>Your cart is empty!</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('HomeScreen')}
                style={{
                  marginTop: 20,
                  backgroundColor: '#51cf66',
                  paddingHorizontal: 20,
                  paddingVertical: 10,
                  borderRadius: 5,
                }}
              >
                <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Continue Shopping</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      <BottomTab />
    </GestureHandlerRootView>
  );
};

export default CatScreen;
