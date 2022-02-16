import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ScrollView, Button, Alert } from 'react-native';
import Stylesheet from './styles/Styles';
import RadioButton from './components/RadioButton';
import React, { useState } from 'react';
import {Picker} from '@react-native-picker/picker';

export default function App() {

  const [weight, setWeight] = useState(0);
  const [gender, setGender] = useState('No selection');
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [alcometer, setAlcometer] = useState(0);
  const [isColor, setIsColor] = useState(false);

// bottles picker options
  const bottlesAmount=Array();
  bottlesAmount.push({label: '1 bottle', value: 1});
  bottlesAmount.push({label: '2 bottles', value: 2});
  bottlesAmount.push({label: '3 bottles', value: 3});
  bottlesAmount.push({label: '4 bottles', value: 4});
  bottlesAmount.push({label: '5 bottles', value: 5});
  bottlesAmount.push({label: '6 bottles', value: 6});
  bottlesAmount.push({label: '7 bottles', value: 7});
  bottlesAmount.push({label: '8 bottles', value: 8});
  bottlesAmount.push({label: '9 bottles', value: 9});
  bottlesAmount.push({label: '10 bottles', value: 10});

// hours picker options
  const hours=Array();
  hours.push({label: '1 hour', value: 1});
  hours.push({label: '2 hours', value: 2});
  hours.push({label: '3 hours', value: 3});
  hours.push({label: '4 hours', value: 4});
  hours.push({label: '5 hours', value: 5});
  hours.push({label: '6 hours', value: 6});
  hours.push({label: '7 hours', value: 7});
  hours.push({label: '8 hours', value: 8});

// radio button options
  const genderValues = [
    {
      label: 'Female',
      value: 1
    },
    {
      label: 'Male',
      value: 2
    }
  ]

// ALCOMETER CALCULATION
  const calculate = () => {
    if (weight === 0 || weight == '') {
      selectAlert("Please input your weight!");
      return;
    } else if (gender === "No selection") {
      selectAlert("Please choose gender first!");
      return;
    }
    let result = 0;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burning = weight / 10;
    let gramsLeft = grams - burning * time;
    if (gender === 1) {
      result = gramsLeft / (weight * 0.6);
    } else {
      result = gramsLeft / (weight * 0.7);
    }
    if (result < 0) {
      result = 0;
    }
    setAlcometer(result);
    setIsColor(true);
  }

// shows appropriate warning color for alcometer result
  const backgroundColor = () => {
    let color;
    if  (!isColor) {
      color = '';
    } else if (alcometer < 0.005) {
      color = '#03DAC6';
    } else if (alcometer <= 0.2 && alcometer > 0) {
      color = '#FFCC00';
    } else if (alcometer > 0.2) {
      color = '#B00020';
    }
    return color;
  }

// Alert for missing weight or gender
  const selectAlert = (message) => {
    Alert.alert(
      "Hold on!",
      message,
      [
        {
          text: "OK",
        }
      ]
    );
  }

  return (
    <ScrollView style={[Stylesheet.screenBackground, {backgroundColor: backgroundColor()}]} >
      <View style={Stylesheet.container}>

        <Text style={Stylesheet.heading} >Alcometer</Text>

        {/* Weight input */}
        <Text style={Stylesheet.subheading} >Weight</Text>
        <View style={Stylesheet.input} >
          <TextInput 
            placeholder='Input your weight in kilograms.'
            keyboardType='number-pad'
            onChangeText={text => setWeight(text)}
          />
        </View>

        <View style={Stylesheet.separator} />

        {/* Bottles Picker */}
        <Text style={Stylesheet.subheading} >Bottles</Text>
        <View>
          <Picker style={Stylesheet.picker}
              onValueChange={(itemValue) => setBottles(itemValue)}
              selectedValue={bottles}
            >
              {bottlesAmount.map((bottles,index) => (
                <Picker.Item key={index} label={bottles.label} value={bottles.value}/>
              ))}
          </Picker>
        </View>

        {/* Time Picker */}        
        <Text style={Stylesheet.subheading} >Time</Text>
        <View>
          <Picker style={Stylesheet.picker}
              onValueChange={(itemValue) => setTime(itemValue)}
              selectedValue={time}
            >
              {hours.map((hours,index) => (
                <Picker.Item key={index} label={hours.label} value={hours.value}/>
              ))}
          </Picker>
        </View>

        {/* Gender Radio Button */}
        <Text style={Stylesheet.subheading} >Gender</Text>
        <View>
          <RadioButton options={genderValues} onPress={(value) => {setGender(value)}} />
        </View>

        {/* Result */}
        <View style={Stylesheet.resultView} >
          <Text style={[Stylesheet.result,  {color: backgroundColor()}]} >{alcometer.toFixed(2)}</Text>
        </View>

        {/* Calculate Button */}
        <View style={Stylesheet.button} >
          <Button 
          color={'#6200EE'} 
          title='Calculate'
          onPress={calculate}
          />
        </View>
        
        <StatusBar style="auto" backgroundColor={backgroundColor()} />
      </View>
    </ScrollView>
  );
}