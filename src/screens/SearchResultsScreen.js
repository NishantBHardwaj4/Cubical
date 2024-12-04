// // import React, {useState} from 'react';
// // import {View, Text, FlatList, Image, TouchableOpacity, TextInput} from 'react-native';
// // import {useSelector, useDispatch} from 'react-redux';
// // import {
// //   selectFilteredCategories,
// //   setSearchQuery,
// // } from '../redux/featurs/categoriesSlice/CategoriesSlice';

// // const SearchResultsScreen = () => {
// //   const dispatch = useDispatch();
// //   const filteredCategories = useSelector(selectFilteredCategories); // Get filtered categories from Redux
// //   const [query, setQuery] = useState(''); // Local state for search input

// //   // Function to handle search
// //   const handleSearch = () => {
// //     dispatch(setSearchQuery(query)); // Update Redux state with search query
// //   };

// //   return (
// //     <>
// //       {/* Search Bar */}
// //       <View style={{flexDirection: 'row', margin: 10}}>
// //         <TextInput
// //           placeholder="Search Item"
// //           value={query}
// //           onChangeText={text => setQuery(text)}
// //           style={{
// //             flex: 1,
// //             borderWidth: 1,
// //             borderColor: 'lightgray',
// //             padding: 10,
// //             borderRadius: 5,
// //           }}
// //         />
// //         <TouchableOpacity
// //           onPress={handleSearch}
// //           style={{
// //             backgroundColor: 'lightpink',
// //             justifyContent: 'center',
// //             alignItems: 'center',
// //             paddingHorizontal: 15,
// //             marginLeft: 10,
// //             borderRadius: 5,
// //           }}>
// //           <Text style={{color: 'white'}}>Search</Text>
// //         </TouchableOpacity>
// //       </View>

// //       {/* Search Results */}
// //       <View style={{flex: 1, padding: 20}}>
// //         {filteredCategories.length > 0 ? (
// //           <FlatList
// //             data={filteredCategories}
// //             keyExtractor={(item, index) => index.toString()}
// //             renderItem={({item}) => (
// //               <TouchableOpacity style={{marginBottom: 20}}>
// //                 <Image
// //                   source={{uri: item.image}}
// //                   style={{width: 100, height: 100, borderRadius: 10}}
// //                 />
// //                 <Text style={{fontSize: 18, fontWeight: 'bold'}}>{item.name}</Text>
// //               </TouchableOpacity>
// //             )}
// //           />
// //         ) : (
// //           <Text style={{fontSize: 18, textAlign: 'center'}}>No results found</Text>
// //         )}
// //       </View>
// //     </>
// //   );
// // };

// // export default SearchResultsScreen;


// import React, { useState } from 'react';
// import { View, Text, FlatList, Image, TouchableOpacity, TextInput } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';
// import { selectFilteredCategories, setSearchQuery } from '../redux/featurs/categoriesSlice/CategoriesSlice';

// const SearchResultsScreen = () => {
//   const dispatch = useDispatch();
//   const [searchInput, setSearchInput] = useState('');
//   const filteredCategories = useSelector(selectFilteredCategories);

//   const handleSearch = () => {
//     dispatch(setSearchQuery(searchInput)); // सर्च क्वेरी को Redux स्टेट में सेट करें
//   };

//   return (
//     <>
//       {/* सर्च बार */}
//       <View style={{ flexDirection: 'row', margin: 10 }}>
//         <TextInput
//           placeholder="Search Item"
//           style={{ width: 200, borderBottomWidth: 1, marginRight: 10 }}
//           value={searchInput}
//           onChangeText={(text) => setSearchInput(text)}
//         />
//         <TouchableOpacity style={{ backgroundColor: 'lightpink', padding: 5 }} onPress={handleSearch}>
//           <Text>Search</Text>
//         </TouchableOpacity>
//       </View>

//       {/* सर्च रिज़ल्ट */}
//       <View style={{ flex: 1, padding: 20 }}>
//         {filteredCategories.length > 0 ? (
//           <FlatList
//             data={filteredCategories}
//             keyExtractor={(item, index) => index.toString()}
//             renderItem={({ item }) => (
//               <TouchableOpacity style={{ marginBottom: 20 }}>
//                 <Image
//                   source={{ uri: item.image }}
//                   style={{ width: 100, height: 100, borderRadius: 10 }}
//                 />
//                 <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</Text>
//               </TouchableOpacity>
//             )}
//           />
//         ) : (
//           <Text style={{ fontSize: 18, textAlign: 'center' }}>No results found</Text>
//         )}
//       </View>
//     </>
//   );
// };

// export default SearchResultsScreen;


import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  selectFilteredCategories,
  setSearchQuery,
} from "../redux/featurs/categoriesSlice/CategoriesSlice";
import BottomTab from "../navigations/appNavigation/BottomNavigation";

const SearchResultsScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const filteredCategories = useSelector(selectFilteredCategories);
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  return (
    <>
      <View style={styles.container}>
        {/* Search Bar */}
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Search Categories"
            value={query}
            onChangeText={(text) => setQuery(text)}
            style={styles.searchInput}
          />
          <TouchableOpacity onPress={handleSearch} style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search</Text>
          </TouchableOpacity>
        </View>

        {/* Results */}
        {filteredCategories.length > 0 ? (
          <FlatList
            data={filteredCategories}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.categoryCard}
                onPress={() =>
                  navigation.navigate("CategoryDetails", { category: item })
                }
              >
                <Image
                  source={{ uri: item.image }}
                  style={styles.categoryImage}
                />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        ) : (
          <View style={styles.noResultsContainer}>
            <Text style={styles.noResultsText}>No categories found</Text>
          </View>
        )}
      </View>

      <BottomTab />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    padding: 20,
  },
  searchBarContainer: {
    flexDirection: "row",
    marginBottom: 20,
    alignItems: "center",
  },
  searchInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  searchButton: {
    backgroundColor: "#ff6f61",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginLeft: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  searchButtonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  categoryCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 15,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginRight: 15,
    borderRadius: 10,
  },
  categoryName: {
    fontSize: 18,
    fontWeight: "500",
    color: "#333",
  },
  noResultsContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  noResultsText: {
    fontSize: 18,
    color: "#999",
  },
});

export default SearchResultsScreen;
