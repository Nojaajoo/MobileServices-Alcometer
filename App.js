import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Stylesheet from './styles/Styles';
import RadioButton from './components/RadioButton';
import React, { useState } from 'react';

export default function App() {

  const [test,setTest] = useState('No selection');

  const testValues = [
    {
      label: 'Female',
      value: 1
    },
    {
      label: 'Male',
      value: 2
    }
  ]


  return (
    <View style={Stylesheet.container}>
      <RadioButton options={testValues} onPress={(value) => {setTest(value)}} />
      <Text>{test}</Text>
      <StatusBar style="auto" />
    </View>
  );
}