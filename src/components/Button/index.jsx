import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import functionStyle from './style';

function MyButton({ pequeno = false, invertido = false, val, action, estilos }){
    const stylesDefault = functionStyle(pequeno, invertido)

    return (
        <TouchableOpacity onPress={action} style={[stylesDefault.botao, estilos]}>
            <Text style={stylesDefault.valor}>
                { val }
            </Text>
        </TouchableOpacity>
    )
}

export { MyButton }