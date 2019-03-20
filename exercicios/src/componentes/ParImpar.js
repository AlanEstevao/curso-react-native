import React from 'react'
import { View, Text } from 'react-native'
import Padrao from '../estilo/Padrao'
import If from './If'

//function parOuImpar(num) {
//	if(num % 2 == 0) {
//		return <Text style={Padrao.ex} >Par</Text>
//	}else{
//		return <Text style={Padrao.ex} >Ímpar</Text>
//	}
//   const v = num % 2 == 0 ? 'Par' : 'Ímpar'
//    return <Text style={Padrao.ex}>{v}</Text>
//}

//{parOuImpar(props.number)}

export default props =>
    <View>
        {
            props.number % 2 == 0
            ? <Text style={Padrao.ex}>Par</Text>
            : <Text style={Padrao.ex}>Impar</Text>
        }
    </View>