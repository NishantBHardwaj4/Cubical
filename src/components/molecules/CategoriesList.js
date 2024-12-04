import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import { selectCategories } from '../../redux/featurs/categoriesSlice/CategoriesSlice';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

const CategoriesList = () => {
  const navigation = useNavigation();
  const categories = useSelector(selectCategories);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Categories</Text>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('CategoriesPart', { item })}
            style={styles.cardContainer}
          >
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#333',
    marginBottom: 15,
    marginLeft: 15,
  },
  listContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  cardContainer: {
    width: 110,
    height: 150,
    backgroundColor: 'white',
    marginHorizontal: 12,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
    padding: 10,
    marginBottom: 10,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  cardText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#444',
    fontWeight: '600',
    marginTop: 5,
  },
});

export default CategoriesList;
  