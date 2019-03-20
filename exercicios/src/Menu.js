import React from 'react'

import {createDrawerNavigator} from 'react-navigation'
import Simples from './componentes/Simples'
import ParImpar from './componentes/ParImpar'
import Inverter, {MegaSena} from './componentes/Multi' //export default
// import {Inverter, } //export mais de 1 componente
import Contador from './componentes/Contador'
import Plataformas from './componentes/Plataformas'
import ValidarProps from './componentes/ValidarProps'
import Evento from './componentes/Evento'
import { Avo } from './componentes/ComunicacaoDireta'
import TextoSincronizado from './componentes/ComunicacaoIndireta'
import ListaFlex from './componentes/ListaFlex'
import Flex from './componentes/Flex'

export default createDrawerNavigator({

    Flex:{
        screen: Flex
    },
    
    ListaFlex: {
        screen: ListaFlex,
        navigationOptions: { title: 'Lista (FlexBox)' }
    },

    TextoSincronizado: {
        screen: TextoSincronizado,
        navigationOptions: { title: 'Texto Sincronizado' }
    },

    Avo: {
        screen: () => <Avo nome='João' sobrenome='Oliveira' />
    },

    Evento: {
        screen: Evento
    },

    ValidarProps: {
        screen: () => <ValidarProps ano={18} />
    },

    Plataformas: {
        screen: Plataformas
    },

    Contador: {
        screen: () => <Contador numeroIncial={10} />
    },

    MegaSena: {
        screen: () => <MegaSena numeros={8} />,
        navigationOptions: { title: 'Mega Sena'}
    },

    Inverter: {
        screen: () => <Inverter texto='Alan Estevão' />
    },

    ParImpar: {
        screen : ()=> <ParImpar numero={30} />,
        navigationOptions: {title: 'Par & Ímpar'}
    },

    Simples: {
        screen: () => <Simples texto='Flexível' />
    },

},{ drawerWidth: 300})