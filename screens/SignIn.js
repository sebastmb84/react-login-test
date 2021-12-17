import { Alert } from 'bootstrap';
import React, { Component } from 'react'
import { StyleSheet, TextInput, View, Button } from 'react-native'

export default class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password:'',
        };
    }

    onLogin(){
        const { email, password } = this.state;
        console.log("Alerta pasando info")
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <TextInput
          value={this.state.username}
          onChangeText={(username) => this.setState({ username })}
          placeholder={'Username'}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={'Password'}
          secureTextEntry={true}
          style={styles.input}
        />
        
        <Button
          title={'Login'}
          style={styles.input}
          onPress={this.onLogin.bind(this)}
        />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
      },
      input: {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
      },


})

