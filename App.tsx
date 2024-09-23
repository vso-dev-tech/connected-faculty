import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/routes/stack';
import {Provider} from 'react-redux';
import store from './src/libraries/redux/context/store';
import { StatusBar } from 'react-native';
import { white } from './src/assets/colors';


const App = () => {
  return (
   <NavigationContainer>
      <Provider store = {store} >
      <Stacks />
      <StatusBar barStyle={'dark-content'} backgroundColor={white.main}/>
      </Provider>
   </NavigationContainer>
  );
};

export default App;
