import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Stylesheet from './styles/Styles';

export default function App() {
  return (
    <View style={Stylesheet.container}>
      <Text>Testings</Text>
      <StatusBar style="auto" />
    </View>
  );
}


