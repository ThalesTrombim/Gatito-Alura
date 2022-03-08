import React from 'react';
import { TextInput } from 'react-native';
import style from './style';

function CampoInteiro({ val, action, estilos }) {
    const numberString = String(val)

    const atualiza = (newVal, callback) => {
        const verify = newVal.match(/^[0-9]*$/)
        if(!verify) return;

        const removeZeroEsq = newVal.replace(/^(0)(.+)/, '$2')

        callback(removeZeroEsq);
    }

    return (
        <TextInput 
            style={[style.campo, estilos]}
            keyboardType='number-pad'
            selectTextOnFocus
            onChangeText={(newVal)  => {atualiza(newVal, action)}}
            value={numberString}
        />
    )
}

export { CampoInteiro }