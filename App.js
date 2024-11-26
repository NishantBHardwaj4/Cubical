import React, { useState, useEffect } from 'react';
import { Provider } from 'react-redux'; 
import store, { persistor } from './src/redux/Store'; 
import { PersistGate } from 'redux-persist/integration/react';
import AsyncStorage from '@react-native-async-storage/async-storage';
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
    return null;
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


