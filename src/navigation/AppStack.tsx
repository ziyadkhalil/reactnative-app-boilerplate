import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {TabBar} from './TabBar';

const Main = createStackNavigator<AppStackParams>();

export function AppStack() {
  return (
    <Main.Navigator screenOptions={{headerShown: false}}>
      <Main.Screen name="TabBar" component={TabBar} />
    </Main.Navigator>
  );
}
