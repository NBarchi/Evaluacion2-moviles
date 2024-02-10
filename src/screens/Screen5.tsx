import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styleGlobal } from '../theme/appTheme'
import { InputComponet } from '../components/InputComponet'
import { ButtonComponent } from '../components/ButtonComponent'

interface NumForm{
  num1: string,
  num2: string
}

export const Screen5 = () => {

  const [form, setForm] = useState<NumForm>({
    num1: '',
    num2: ''
  })

  const handlerChangeText=(name: string, value:string)=>{
    setForm(prevState=>({
      ...prevState,
      [name]:value
    }))
  }

  const [resultado, setResultado] = useState('')

  const MenorIgual=()=>{
    const numero1=parseInt(form.num1)
    const numero2=parseInt(form.num2)

    if (numero1 <= numero2) {
      setResultado(`${numero1} es menor o igual a ${numero2}`)
    } else {
      setResultado(`${numero1} no es menor o igual a ${numero2}`)
    }

  }

  return (
    <View style={styleGlobal.container}>
      <Text style={styleGlobal.tilte}>Ingrese los números:</Text>
      <InputComponet placeHolder='Número 1' name='num1' onChangeText={handlerChangeText}/>
      <InputComponet placeHolder='Número 2' name='num2' onChangeText={handlerChangeText}/>
      <ButtonComponent title='<=' onPress={MenorIgual}/>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>{resultado}</Text>
    </View>
  )
}
