import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { MyButton } from '../../../components/Button';
import { CampoInteiro } from '../../../components/CampoInteiro';
import style from './style';

function Item({ name, price, description }){
    const [ quantidade, setQuantidade ] = useState(1)
    const [ total, setTotal ] = useState(price)
    const [ expand, setExpand ] = useState(false)
    
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
            <TouchableOpacity style={style.informacao} onPress={invertExpand}>
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
            </TouchableOpacity>
            { expand && 
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
                    <MyButton val='Adicionar ao carrinho' action={() => {}}/>
                </View>
            }
            <View style={style.divisor} />
        </>
    )
}

export { Item }