import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stacks from './src/routes/stack';
import {Provider} from 'react-redux';
import store from './src/libraries/redux/context/store';


const App = () => {
  return (
   <NavigationContainer>
      <Provider store = {store} >
      <Stacks />
      </Provider>
   </NavigationContainer>
  )
}

export default App;
