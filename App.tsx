import {View, Text} from 'react-native';
import React from 'react';
import Antdesign from 'react-native-vector-icons/AntDesign';

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome</Text>
      <Antdesign name="stepforward" size={45} />
    </View>
  );
}
