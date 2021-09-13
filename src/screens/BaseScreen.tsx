import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export function BaseScreen() {
  return (
    <View style={[styles.flex, styles.center]}>
      <Text>Zeal's reactnative boilerplate</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {flex: 1},
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
