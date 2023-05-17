import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Lista from './components/Lista';

export default function App() {
  return (
    <View style={styles.container}>
      <Lista></Lista>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  

  },
});
