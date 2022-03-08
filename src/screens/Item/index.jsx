import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { MyButton } from '../../components/Button';
import { CampoInteiro } from '../../components/CampoInteiro';
import style from './style';

function Item({ name, price, description }){
    const [ quantidade, setQuantidade ] = useState(0)

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
                    { price }
                </Text>
            </View>
            <View style={style.carrinho}>
                <View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Quantidade:</Text>
                        <CampoInteiro estilos={style.quantidade} val={quantidade} action={setQuantidade}/>
                    </View>
                    <View style={style.valor}>
                        <Text style={style.descricao}>Preço</Text>
                        <Text style={style.preco}>0</Text>
                    </View>
                </View>
                <MyButton val='Adicionar' action={() => {}}/>
            </View>
            <View style={style.divisor} />
        </>
    )
}

export { Item }