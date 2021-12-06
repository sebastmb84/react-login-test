import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <h3 className="text-white pt-2">Hola Soy mi primera App</h3>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f34022',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
