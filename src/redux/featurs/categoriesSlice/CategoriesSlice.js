import {createSlice} from '@reduxjs/toolkit';
import { createSelector } from 'reselect';


const initialState = { 
  categories: [
    {
      name: 'Apparel',
      image:
        'https://media.istockphoto.com/id/955641488/photo/clothes-shop-costume-dress-fashion-store-style-concept.webp?b=1&s=612x612&w=0&k=20&c=vY7Z40ulwxsFmetje1ck91C-GSPFpFUZqOxkIpuMug8=',
      subcategories: [
        {
          name: "Men's    Fashion",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLATEgfpAEhQHw_rCWsoTwGZttzgEbEHwfnA&s',
          subcategories: [
            {
                name: 'Sweaters',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSTENuBqzN5JwvzJNbT-r8_1D9IHIz3nrZh8K0TxG9Wx_OBP4W3-EF5SWp0U8KeU9ULkA&usqp=CAU',
                price: '$345',
                rating: 4.3,
                id: 'prod-001',
              },
              {
                name: 'Jacket',
                image: 'https://lp2.hm.com/hmgoepprod?set=quality%5B79%5D%2Csource%5B%2F31%2F0d%2F310dbe8e29ea91d278a4ec73c137304e30bc8fb1.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BLOOKBOOK%5D%2Cres%5Bm%5D%2Chmver%5B1%5D&call=url[file:/product/main]',
                price: '$20',
                rating: 4.5,
                id: 'prod-002',
              },
              {
                name: 'Denim Shirt',
                image: 'https://cdn.shopify.com/s/files/1/0369/6076/4041/products/RFSH-40290-A_2_600x.jpg?v=1700228794',
                price: '$15',
                rating: 4.1,
                id: 'prod-003',
              },
              {
                name: 'Jeans',
                image: 'https://images.bestsellerclothing.in/data/JJ/13-feb-2024/246402301_g0.jpg?width=1080&height=1355&mode=fill&fill=blur&format=auto',
                price: '$30',
                rating: 4.6,
                id: 'prod-004',
              },
              {
                name: 'Hoodies',
                image: 'https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/21203458/2023/1/2/06271946-be59-476d-bb62-0b4d81c961611672651142670-Roadster-Men-Sweatshirts-91672651142282-1.jpg',
                price: '$50',
                rating: 4.7,
                id: 'prod-005',
              },
              {
                name: 'Shorts',
                image: 'https://assets.ajio.com/medias/sys_master/root/20240401/7ivk/660acc6f05ac7d77bbe8ad99/-473Wx593H-410477435-tpe-MODEL.jpg',
                price: '$40',
                rating: 4.4,
                id: 'prod-006',
              },
              {
                name: 'T-Shirt',
                image: 'https://img.damensch.com/products/johnny_polo_wisdom_wine_(5).jpg?fm=webp&h=500',
                price: '$60',
                rating: 4.8,
                id: 'prod-007',
              },
              {
                name: 'Ryder Jacket',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFA8rCxkSKMLfbh7Jsa_ANn0us6tnIExInXg&s',
                price: '$22',
                rating: 4.3,
                id: 'prod-008',
              },
          ],
        },
        {
          name: "Women's Fashion",
          image:
            'https://m.media-amazon.com/images/I/61-MlTeQ1lL._AC_UY1100_.jpg',
        },
        {
          name: "Kids Fashion",
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0_uJtpjcGkFGigIKOE0on6W0-cqDTGoyIsA&s',
        },
        {
          name: 'Sneakers',
          image:
            'https://www.converse.in/media/catalog/product/1/6/162050c_01_1.jpg?auto=webp&format=pjpg&width=640&height=800&fit=cover',
          subcategories: [
            // {
            //     name: 'Nike',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
            //     price: '$40',
            //     id: 'shoe-001',
            //     description:'Nike shoes are known for their innovative design, comfort, and performance-focused features, making them popular for sports, fitness, and everyday wear. They are often crafted with lightweight, breathable materials, advanced cushioning technologies like Air Max or Zoom Air, and ergonomic support to enhance foot stability and movement'
            //   },
            //   {
            //     name: 'Adidas',
            //     image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
            //     price: '$55',
            //     id: 'shoe-002',
            //     description:'Nike shoes are known for their innovative design, comfort, and performance-focused features, making them popular for sports, fitness, and everyday wear. They are often crafted with lightweight, breathable materials, advanced cushioning technologies like Air Max or Zoom Air, and ergonomic support to enhance foot stability and movement'
            //   },
            //   {
            //     name: 'Puma',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
            //     price: '$69',
            //     id: 'shoe-003',
                
            //   },
            //   {
            //     name: 'Nike',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
            //     price: '$40',
            //     id: 'shoe-004',
            //   },
            //   {
            //     name: 'Adidas',
            //     image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
            //     price: '$55',
            //     id: 'shoe-005',
            //   },
            //   {
            //     name: 'Puma',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
            //     price: '$69',
            //     id: 'shoe-006',
            //   },
            //   {
            //     name: 'Nike',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnFKyLTkuY2dvN963dSVWFmFk-I__NanYFYA&s',
            //     price: '$40',
            //     id: 'shoe-007',
            //   },
            //   {
            //     name: 'Adidas',
            //     image: 'https://5.imimg.com/data5/BJ/PX/MY-35581878/adidas-vermont-white-running-shoes.png',
            //     price: '$55',
            //     id: 'shoe-008',
            //   },
            //   {
            //     name: 'Puma',
            //     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbASUKxGng2oCQlny4ElHZPBdkFCk2_5mkGQ&s',
            //     price: '$69',
            //     id: 'shoe-009',
            //   },
          ],
        },
        {
          name: 'Accessories',
          image:
            'https://www.theodoredesigns.com.au/cdn/shop/articles/i_8.webp?v=1674285421',
        },
        {
          name: 'Winter Clothes',
          image:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQdu8Rkns9GkmYTfEG9gDXLGY9DPlecPFduQ&s',
        },
      ],
    },
    {
      name: 'Electronics & Gadgets',
      image:
        'https://images.stockcake.com/public/b/5/a/b5a00bc0-d4bf-4303-a5a3-e1c3730fdc53_large/electronic-gadgets-collection-stockcake.jpg',
      subcategories: [
        // {
        //   name: 'Mobile Phones & Tablets',
        //   image:
        //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTbaoiNHiF1n-gsRnMi2bzGolWDyCjjTEkxg&s',
        // },
        // {
        //   name: 'Laptops & Computers',
        //   image:
        //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMXvNbm80ZxDVwpCrk8fmhd0VAgQswVDlTeA&s',
        // },
        // {
        //   name: 'Cameras',
        //   image:
        //     'https://img.freepik.com/free-vector/video-surveillance-security-cameras-realistic-composition-black-white-cameras-form-circle-illustration_1284-61014.jpg?semt=ais_hybrid',
        // },
        // {
        //   name: 'TV & Home Entertainment',
        //   image:
        //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxNKzyIfCJCxtMkx5ZVC5DaoFcyG2-C8tGAg&s',
        // },
        // {
        //   name: 'Audio Devices',
        //   image:
        //     'https://www.portronics.com/cdn/shop/files/Audio_Hero_Banner_Mobile.png?v=1708407591',
        // },
        // {
        //   name: 'Mobile Covers',
        //   image:
        //     'https://w7.pngwing.com/pngs/95/779/png-transparent-iphone-6-mobile-phone-accessories-printing-smartphone-telephone-case-text-mobile-phone-iphone-6.png',
        // },
      ],
    },
    {
      name: 'Personal Care',
      image:
        'https://www.shutterstock.com/image-photo/collection-personal-care-items-including-260nw-2477830353.jpg',
      subcategories: [
        {name: 'Skin Care', image: 'https://example.com/images/skin_care.jpg'},
        {name: 'Hair Care', image: 'https://example.com/images/hair_care.jpg'},
        {name: 'Makeup', image: 'https://example.com/images/makeup.jpg'},
        {
          name: 'Perfumes & Fragrances',
          image: 'https://example.com/images/perfume.jpg',
        },
      ],
    },
    {
      name: 'LifeStyle',
      image:
        'https://i.pinimg.com/736x/59/10/11/591011e5b5681201dee82b1ecce06a80.jpg',
      subcategories: [
        {name: 'Furniture', image: 'https://example.com/images/furniture.jpg'},
        {
          name: 'Kitchen Appliances',
          image: 'https://example.com/images/kitchen_appliances.jpg',
        },
        {
          name: 'Home Decor',
          image: 'https://example.com/images/home_decor.jpg',
        },
        {
          name: 'Cleaning & Home Care',
          image: 'https://example.com/images/cleaning.jpg',
        },
      ],
    },
    {
      name: 'Gym Equipment',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdU0gTFXmEOKmCfTFPnWIPgeirAzQGUBHSmw&s',
      subcategories: [
        {
          name: 'Fitness Equipment',
          image: 'https://example.com/images/fitness.jpg',
        },
        {
          name: 'Health Devices',
          image: 'https://example.com/images/health_devices.jpg',
        },
        {
          name: 'Supplements & Vitamins',
          image: 'https://example.com/images/supplements.jpg',
        },
      ],
    },
    {
      name: 'Books and Stationery',
      image:
        'https://static.vecteezy.com/system/resources/thumbnails/007/460/508/small_2x/set-of-colorful-school-supplies-books-and-notebooks-stationery-accessories-photo.jpg',
      subcategories: [
        {
          name: 'Educational Books',
          image: 'https://example.com/images/education_books.jpg',
        },
        {
          name: 'Fiction & Non-Fiction',
          image: 'https://example.com/images/fiction.jpg',
        },
        {
          name: 'Stationery',
          image: 'https://example.com/images/stationery.jpg',
        },
      ],
    },
    {
      name: 'Sports',
      image:
        'https://www.tencom.com/hubfs/sports-1.jpeg',
      subcategories: [
        {
          name: 'Sports Equipment',
          image: 'https://example.com/images/sports.jpg',
        },
        {name: 'Outdoor Gear', image: 'https://example.com/images/outdoor.jpg'},
      ],
    },
    {
      name: "Kids Toy",
      image:
        'https://www.gogokids.co.nz/cdn/shop/articles/How-to-Choose-the-Best-Kids-Toys-for-Your-Child_s-Development-and-Playtime_1200x1200.jpg',
      subcategories: [
        {name: 'Toys', image: 'https://example.com/images/toys.jpg'},
        {
          name: "Kids' Furniture",
          image: 'https://example.com/images/kids_furniture.jpg',
        },
      ],
    },
    {
      name: 'Animal Care',
      image:
        'https://dynamicmedia.dow.com/is/image/dow/shutterstock_127046474?qlt=82&ts=1714398605717&dpr=off',
      subcategories: [
        {name: 'Pet Food', image: 'https://example.com/images/pet_food.jpg'},
        {
          name: 'Pet Accessories',
          image: 'https://example.com/images/pet_accessories.jpg',
        },
      ],
    },
    {
      name: 'Groceries',
      image:
        'https://img.freepik.com/free-photo/top-view-delicious-groceries-paper-bag_23-2149139455.jpg',
      subcategories: [
        {
          name: 'Daily Essentials',
          image: 'https://example.com/images/daily_grocery.jpg',
        },
        {
          name: 'Food Items',
          image: 'https://example.com/images/food_items.jpg',
        },
      ],
    },
  ],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
  },
});

// export const selectFilteredCategories = createSelector(
//   // Input selectors
//   [(state) => state.categories.categories, (state) => state.categories.searchQuery],
//   // Output selector
//   (categories, searchQuery) => {
//     if (!searchQuery) return categories; // अगर सर्च क्वेरी खाली है तो सभी कैटेगोरीज़ रिटर्न करें
//     return categories.filter((category) =>
//       category.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }
// );



// export const selectCategories = state => state.categories.categories;
// export default categoriesSlice.reducer;

export const { setSearchQuery } = categoriesSlice.actions;

export const selectFilteredCategories = createSelector(
  [(state) => state.categories.categories, (state) => state.categories.searchQuery],
  (categories, searchQuery) => {
    if (!searchQuery) return categories;
    return categories.filter((category) =>
      category.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }
);

export const selectCategories = (state) => state.categories.categories;

export default categoriesSlice.reducer;
