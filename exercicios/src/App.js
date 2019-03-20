import React, { Component } from 'react'
import { View, StyleSheet  } from 'react-native'

import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import {Inverter, MegaSena} from './componentes/Multi' //export default
// import {Inverter, } //export mais de 1 componente

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Simples texto='Flexível!!' />
				<ParImpar number={31} />
				<Inverter texto='React Nativo' />
				<MegaSena numeros={6} />
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})