import React from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react';

const styles = StyleSheet.create({
    formWrapper: {
        width: 90,
        backgroundColors: '#fff'
    }
      
  });

class LoginScreen extends React.Component {

    state={
        email: "",
        password: "",
    }
    
    render() {
        return (
            <View>
               
                <View style= {styles.inputView}>
                    <p className="bg-light border rounded">
                    <TextInput
                        styles={styles.inputText }
                        placeholder="Email"
                        placeholderTextColor="black"
                        onChangeText={text => this.useState({email:text})}               
                    />
                    </p>
                    <p className="bg-light border rounded mt-2">
                    <TextInput
                        styles={styles.inputText}
                        placeholder="password.."
                        placeholderTextColor="black"
                        onChangeText={text => this.useState({password:text})}
                        
                     />
                    </p> 

                    <button className="btn btn-light">Iniciar sesion</button>
                    
                </View>

               

            </View>
        )
    }

}

export default LoginScreen; 

