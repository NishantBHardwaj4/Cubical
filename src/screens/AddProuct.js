import React, { useEffect } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import UserNavBar from '../components/molecules/UserNavBar';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemToCart,
  removeItemFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../redux/featurs/cartSlice/CartSliceProduct';

const AddProduct = ({ route, navigation }) => {
  const { item } = route.params;
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const isProductInCart = (productId) => {
    return cartItems.some((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    dispatch(addItemToCart({ ...product, quantity: 1 }));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeItemFromCart(productId));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  };

  useEffect(() => {
    console.log(item);
  }, []);

  return (
    <GestureHandlerRootView style={styles.container}>
      <UserNavBar />
      <FlatList
        data={item.subcategories}
        keyExtractor={(subcategory, index) => index.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item: subcategory }) => {
          const isInCart = isProductInCart(subcategory.id);
          const cartItem = cartItems.find((cartItem) => cartItem.id === subcategory.id);
          const quantity = cartItem ? cartItem.quantity : 1;

          return (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('ProductDetails', { product: subcategory })
                }
              >
                <Image
                  source={{ uri: subcategory.image }}
                  style={styles.image}
                />
              </TouchableOpacity>
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{subcategory.name}</Text>
                <Text style={styles.productPrice}>{subcategory.price}</Text>
                <Text style={styles.productRating}>Rating: 4.5</Text>
              </View>
              <View style={styles.actions}>
                {isInCart && (
                  <View style={styles.quantityContainer}>
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => handleDecrement(subcategory.id)}
                    >
                      <Text style={styles.quantityButtonText}>-</Text>
                    </TouchableOpacity>
                    <TextInput
                      value={quantity.toString()}
                      editable={false}
                      style={styles.quantityInput}
                    />
                    <TouchableOpacity
                      style={styles.quantityButton}
                      onPress={() => handleIncrement(subcategory.id)}
                    >
                      <Text style={styles.quantityButtonText}>+</Text>
                    </TouchableOpacity>
                  </View>
                )}
                <View>
                  {isInCart ? (
                    <TouchableOpacity
                      style={styles.removeButton}
                      onPress={() => handleRemoveFromCart(subcategory.id)}
                    >
                      <Text style={styles.removeButtonText}>Remove</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      style={styles.addButton}
                      onPress={() => handleAddToCart(subcategory)}
                    >
                      <Text style={styles.addButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
                  )}
                  <TouchableOpacity
                    style={styles.buyNowButton}
                    onPress={() => navigation.navigate('BuyItemScreen', {
                      items: [...cartItems, { ...subcategory, quantity: 1 }],
                      total: 0, // Calculate total as needed
                    })}
                  >
                    <Text style={styles.buyNowButtonText}>Buy Now</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          );
        }}
      />
    </GestureHandlerRootView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9fafb',
    padding: 10,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 10,
    marginHorizontal: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
    resizeMode: 'cover',
    marginRight: 12,
  },
  productInfo: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#212121',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 14,
    color: '#388e3c',
    fontWeight: '500',
    marginBottom: 5,
  },
  productRating: {
    fontSize: 12,
    color: '#757575',
  },
  actions: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  quantityContainer: {
    
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  quantityButton: {
    backgroundColor: '#eeeeee',
    padding: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#bdbdbd',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#616161',
  },
  quantityInput: {
    color:'red',
    width: 40,
    height: 50,
    textAlign: 'center',
    fontSize: 16,
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  addButton: {
    // backgroundColor: '#2196f3',
    backgroundColor:'#ff9a9e',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 6,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 3,
  },
  addButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  buyNowButton: {
    // backgroundColor: '#ff9800',
    backgroundColor:'#a1c4fd',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginTop: 5,
  },
  buyNowButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#d32f2f',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    marginBottom: 6,
  },
  removeButtonText: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default AddProduct;
