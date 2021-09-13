import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {BaseScreen} from '@src/screens';

const Tab = createBottomTabNavigator<TabBarParams>();

export function TabBar() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={BaseScreen} />
      <Tab.Screen name="Orders" component={BaseScreen} />
      <Tab.Screen name="History" component={BaseScreen} />
      <Tab.Screen name="Settings" component={BaseScreen} />
    </Tab.Navigator>
  );
}
