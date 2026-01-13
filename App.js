import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import AppNav from './src/navigation/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import tailwind from 'twrnc';

export default function App() {
  return (
    <NavigationContainer>
      <AppNav/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
