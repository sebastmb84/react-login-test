import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import loginScreen from './screens/loginScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <loginScreen></loginScreen>
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
