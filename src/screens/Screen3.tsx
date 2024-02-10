import React from 'react'
import { Image, View } from 'react-native'
import { InputComponet } from '../components/InputComponet'

export const Screen3 = () => {
  return (
    <View style= {{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Image source={{uri:'https://www.nationalgeographic.com.es/medio/2018/02/27/playa-de-isuntza-lekeitio__1280x720.jpg'}}
        style={{width:350, height: 300}}/>
    </View>
  )
}
