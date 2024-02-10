import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { ButtonComponent } from '../components/ButtonComponent'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any>{};

export const Screen1 = ({navigation}: Props) => {
  return (
    <View style={styles.container}>
        <Text style={{fontSize: 30, color: 'blue'}}>BIENVENIDO</Text>
        <View style={styles.btnContainer}>
        <ButtonComponent title='Imagen 1'onPress={()=>navigation.navigate('Screen2')}/>
        <ButtonComponent title='Imagen 2'onPress={()=>navigation.navigate('Screen3')}/>
        </View>
        <View style={styles.btnContainer}>
        <ButtonComponent title='>=' onPress={()=>navigation.navigate('Screen4')}/>
        <ButtonComponent title='<=' onPress={()=>navigation.navigate('Screen5')}/>
        </View>
    </View>
  )
}


const styles=StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: 20
    },

    btnContainer:{
        flexDirection: 'row',
        gap: 10,
        flexWrap: 'wrap'
    }
})
