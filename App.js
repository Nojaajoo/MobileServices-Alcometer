import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, ScrollView, Button } from 'react-native';
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

  const hours=Array();
  hours.push({label: '1 hour', value: 1});
  hours.push({label: '2 hours', value: 2});
  hours.push({label: '3 hours', value: 3});
  hours.push({label: '4 hours', value: 4});
  hours.push({label: '5 hours', value: 5});
  hours.push({label: '6 hours', value: 6});
  hours.push({label: '7 hours', value: 7});
  hours.push({label: '8 hours', value: 8});

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

  const calculate = () => {
    if (weight === 0 || weight == '') {
      alert("Please input your weight!");
      return;
    } else if (gender === "No selection") {
      alert("Please choose gender first!");
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

  const backgroundColor = () => {
    let color;
    if  (!isColor) {
      color = '';
    } else if (alcometer <= 0.001) {
      color = 'lightgreen';
    } else if (alcometer <= 0.2 && alcometer > 0) {
      color = 'yellow';
    } else if (alcometer > 0.2) {
      color = 'red';
    }
    return color;
  }


  return (
    <ScrollView style={Stylesheet.container}>
      <Text  style={Stylesheet.heading} >Alcometer</Text>
      <Text>Weight</Text>
      <TextInput 
        placeholder='Input your weight in kilograms.'
        keyboardType='number-pad'
        onChangeText={text => setWeight(text)}
      />
      <View style={Stylesheet.separator} />
      
      <Text>Bottles</Text>
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

      <Text>Time</Text>
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
      
      <Text>Gender</Text>
      <View>
        <RadioButton options={genderValues} onPress={(value) => {setGender(value)}} />
      </View>

      {/* Result */}
      
      <View style={[Stylesheet.resultColor, {backgroundColor: backgroundColor()}]} >
        <Text style={Stylesheet.result} >{alcometer.toFixed(2)}</Text>
      </View>

      <View style={Stylesheet.button} >
        <Button 
        color={'#6200EE'} 
        title='Calculate'
        onPress={calculate}
        />
      </View>
      
      <StatusBar style="auto" backgroundColor={backgroundColor()} />
    </ScrollView>
  );
}