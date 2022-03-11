import React from 'react';

import { FlatList } from 'react-native';
import { Item } from './Item';
import { ScreenDefault } from '../../components/ScreenDefault';
import { StatusCart } from '../../components/StatusCart';

const services = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos.',
        quant: 1
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4, seu gato precisa de duas.',
        quant: 2
    },
    {
        id: 3,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina antirrábica, seu gato precisa de uma por ano.',
        quant: 1
    }
]

function Cart(){
    const total = services.reduce((soma, { price, quant }) => soma + (price * quant), 0)

    return (
        <ScreenDefault>
            <StatusCart total={total}/>
            <FlatList 
                data={ services }
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </ScreenDefault>
    )
}

export { Cart };

// Próxima aula
// npm install @react-navigation/native@5.9.2
// npm install @react-navigation/bottom-tabs@5.11.7