import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MyButton } from '../../../components/Button';
import { CampoInteiro } from '../../../components/CampoInteiro';
import style from './style';

function Item({ name, price, description, quant: quantIni }){
    const [ quantidade, setQuantidade ] = useState(quantIni)
    const [ total, setTotal ] = useState(price * quantIni)
    
    const atualizaQuantTotal = novaQuant => {
        setQuantidade(novaQuant);
        calculaTotal(novaQuant)
    }

    const calculaTotal = quant => {
        setTotal(quant * price)
    }

    const invertExpand = () => {
        setExpand(!expand);
        atualizaQuantTotal(1)
    }

    return (
        <>
            <View style={style.informacao}>
                <Text style={style.nome}>
                    { name }
                </Text>
                <Text style={style.descricao}>
                    { description }
                </Text>
                <Text style={style.preco}>
                    { Intl.NumberFormat('pt-BR', {
                        style: 'currency', currency: 'BRL'
                    }).format(price) }
                </Text>
            </View> 
                <View style={style.carrinho}>
                    <View>
                        <View style={style.valor}>
                            <Text style={style.descricao}>Quantidade:</Text>
                            <CampoInteiro estilos={style.quantidade} val={quantidade} action={atualizaQuantTotal}/>
                        </View>
                        <View style={style.valor}>
                            <Text style={style.descricao}>Total</Text>
                            <Text style={style.preco}>
                                { Intl.NumberFormat('pt-BR', {
                                    style: 'currency', currency: 'BRL'
                                }).format(total) }
                            </Text>
                        </View>
                    </View>
                    <MyButton val='Remover do carrinho' action={() => {}}/>
                </View>
            <View style={style.divisor} />
        </>
    )
}

export { Item }