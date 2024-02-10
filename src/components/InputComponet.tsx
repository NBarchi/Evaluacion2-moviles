import React from 'react'
import { StyleSheet, TextInput } from 'react-native'

interface InputProps{
    placeHolder: string
    name: string
    onChangeText: (name: string, value: string)=> void
}

export const InputComponet = ({placeHolder, onChangeText, name}:InputProps) => {
  return (
    <TextInput
        placeholder={placeHolder}
        keyboardType='numeric'
        style={styles.inputText}
        onChangeText={(value: string)=>onChangeText(name,value)}/>
  )
}


const styles=StyleSheet.create({
    inputText:{
        backgroundColor: '#f1f4f5',
        paddingTop: 10,
        borderWidth: 1,
        width:150
    }
})