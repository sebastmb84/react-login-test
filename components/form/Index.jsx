import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Login from './Login'

export default class Index extends Component {
    render() {
        return (
            <View>
                <Text> Hola Soy el index principal</Text>
                <Login/>
            </View>
        )
    }
}
