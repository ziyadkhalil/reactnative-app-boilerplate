import React from 'react';
import {QueryClientProvider} from 'react-query';

import {queryClient} from '@src/const';
import {NavigationContainer} from '@react-navigation/native';

import {AppStack} from '@src/navigation';

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <AppStack />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
