import React from 'react';
import style from './style';

import { View, Text } from 'react-native';
import { MyButton } from '../Button';

function StatusCart({ total }) {
    return (
        <View style={style.conteudo}>
            <View style={style.total}>
                <Text style={style.descricao}>
                    Total do carrinho
                </Text>
                <Text style={style.valor}>
                    {Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL'}).format(total)}
                </Text>
            </View>
            <View style={style.botao}>
                <MyButton val='Concluir pedido' invertido />
            </View>
        </View>
    )
}

export { StatusCart }