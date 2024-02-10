import React from 'react'
import { Image, View } from 'react-native'

export const Screen2 = () => {
  return (
    <View style= {{flex: 1, alignItems:'center', justifyContent: 'center'}}>
      <Image source={{uri:'https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg'}}
        style={{width:350, height: 300}}/>
    </View>
  )
}
