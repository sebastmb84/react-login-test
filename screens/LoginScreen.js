import React from 'react';
import {  StyleSheet, View, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { useState } from 'react'
import axios from 'axios';
 
const styles = StyleSheet.create({
    formWrapper: {
        width: 90,
        backgroundColors: '#fff'
    }
      
  });

export default function loginScreen() {

    const [email, setUserEmail] = useState();
    const [password, setUserPassword] = useState();

    const handleSubmit = (e) => {
        e.prevent.default();
        console.log("not working!!")
        const data = { setUserEmail, setUserPassword }
        axios.fetch("http://localhost:3000/users/sign_in", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                Content_Type: "application/json",
            }
        
    })
}
    
    return (
            <View>
               
                <View style= {styles.inputView}>
                    <p className="bg-light border rounded">
                    <TextInput
                        styles={styles.inputText }
                        placeholder="Email"
                        placeholderTextColor="black"
                        onChange={e => setUserEmail(e.target.value)}             
                    />
                    </p>
                    <p className="bg-light border rounded mt-2">
                    <TextInput
                        styles={styles.inputText}
                        placeholder="password.."
                        placeholderTextColor="black"
                        onChange={e => setUserPassword(e.target.value)}
                        
                     />
                    </p> 

                    <button className="btn btn-light" onSubmit={handleSubmit}>Iniciar sesion</button>
                    
                </View>

               

            </View>
        )
    }

    