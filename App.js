import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginScreen from './screens/LoginScreen';
import { withTheme } from 'react-native-elements';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f34022',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 200,
    height: 200,
  },
  formWrapper: {
    width: 90,
    backgroundColor: '#fff'
  },
    
});

export default function App() {
  return (
    
    <View style={styles.container}>
      
      <Image style={styles.tinyLogo} source={require('../loginReact/recursos/images/qualmark.png')}></Image>      <LoginScreen/>
    
    </View>
  );
}


