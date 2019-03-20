import React, { Component } from 'react'
import { ScrollView, View, FlatList, Text } from 'react-native'

const alunos = [
    { id: 1, nome: 'João', nota: 7.9},
    { id: 2, nome: 'José', nota: 8.4},
    { id: 3, nome: 'Ana', nota: 5.6},
    { id: 4, nome: 'Bia', nota: 7.0},
    { id: 5, nome: 'Caio', nota: 8.0},
    { id: 6, nome: 'Davi', nota: 4.0},
    { id: 7, nome: 'Eva', nota: 8.2},
    { id: 8, nome: 'Felipe', nota: 10.0},
    { id: 9, nome: 'Gus', nota: 6.0},

    { id: 11, nome: 'João', nota: 7.9},
    { id: 12, nome: 'José', nota: 8.4},
    { id: 13, nome: 'Ana', nota: 5.6},
    { id: 14, nome: 'Bia', nota: 7.0},
    { id: 15, nome: 'Caio', nota: 8.0},
    { id: 16, nome: 'Davi', nota: 4.0},
    { id: 17, nome: 'Eva', nota: 8.2},
    { id: 18, nome: 'Felipe', nota: 10.0},
    { id: 19, nome: 'Gus', nota: 6.0},
]

const itemEstilo = {
    paddingHorizontal: 15,
    height: 60,
    backgroundColor: '#DDD',
    borderWidth: 0.5,
    borderColor: '#222',

    // Flex
    //justifyContent: 'space-around', //aplicado no main axis, alinha no meio da célula
    alignItems: 'center', // aplicado no cross axis
    flexDirection: 'row', //define o main axis
    justifyContent: 'space-between',
}

export const Aluno = props =>
    <View style={itemEstilo}>
        <Text>Nome: {props.nome}</Text>
        <Text style={{fontWeight: 'bold'}}>Nota: {props.nota}</Text> 
    </View>

export default props =>{
    const renderItem = ({item}) => {
        return <Aluno {...item} />
    }

    return (
        <ScrollView>
            <FlatList data={alunos} renderItem={renderItem}
            keyExtractor={(_, index) => index.toString()} />
        </ScrollView>
    )
}