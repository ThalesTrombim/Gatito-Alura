import React from 'react';

import { SafeAreaView, StatusBar, FlatList } from 'react-native';
import { Item } from '../Item';

const services = [
    {
        id: 1,
        name: 'Banho',
        price: 79.9,
        description: 'NÃO DÊ BANHO NO SEU GATO! Mas se precisar nós damos.'
    },
    {
        id: 2,
        name: 'Vacina V4',
        price: 89.9,
        description: 'Uma dose da vacina V4, seu gato precisa de duas.'
    },
    {
        id: 3,
        name: 'Vacina Antirrábica',
        price: 99.9,
        description: 'Uma dose da vacina antirrábica, seu gato precisa de uma por ano.'
    }
]

function Services(){
    return (
        <SafeAreaView>
            <StatusBar />
            <FlatList 
                data={ services }
                renderItem={({ item }) => <Item {...item} />}
                keyExtractor={({ id }) => String(id)}
            />
        </SafeAreaView>
    )
}

export { Services };