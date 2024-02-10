import React, { useState } from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { InputComponet } from '../components/InputComponet'
import { ButtonComponent } from '../components/ButtonComponent'
import { styleGlobal } from '../theme/appTheme'

interface NumForm{
  num1: string,
  num2: string
}

export const Screen4 = () => {

  const [form, setForm] = useState<NumForm>({
    num1: '',
    num2: ''
  })

  const handlerChangeText=(name: string, value: string)=>{
    setForm(prevState => ({
      ...prevState,
      [name]:value
    }))
  }

  const [resultado,setResultado] = useState('')

  const MayorIgual = () =>{
    const numero1= parseInt(form.num1)
    const numero2= parseInt(form.num2)

    if(numero1 >= numero2){
      setResultado(`${numero1} es mayor o igual que ${numero2}`)
    }else{  
      setResultado(`${numero1} no es mayor o igual que ${numero2}`)
    }

  }

  return (
    <View style={styleGlobal.container}>
      <Text style={styleGlobal.tilte}>Ingrese los números:</Text>
      <InputComponet placeHolder='Número 1' name='num1' onChangeText={handlerChangeText}/>
      <InputComponet placeHolder='Número 2' name='num2' onChangeText={handlerChangeText}/>
      <ButtonComponent title='>=' onPress={MayorIgual}/>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{resultado}</Text>
    </View>
  )
}


