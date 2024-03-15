/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {getFontFamily} from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 70, fontFamily: getFontFamily('Inter', '100')}}>
        New Progress is Good Progress!!
      </Text>
    </SafeAreaView>
  );
};

export default App;
