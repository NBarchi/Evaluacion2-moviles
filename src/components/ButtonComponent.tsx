import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

interface ButtonProps{
    title: string
    onPress: ()=>void
}

export const ButtonComponent = ({title, onPress}:ButtonProps) => {
  return (
    <TouchableOpacity style={styles.button}
        onPress={onPress}>
        <Text style={styles.buttontext}>{title}</Text>
    </TouchableOpacity>
  )
}


const styles=StyleSheet.create({
    button:{
        height:40,
        width: 100,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },

    buttontext:{
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign:'center',
    }
})