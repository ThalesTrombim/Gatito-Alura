import React from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import style, { cores } from '../../styles';
import styles from './styles';

function ScreenDefault({ children }) {
    return (
        <>
            <SafeAreaView style={styles.ajustScreen}>
                <StatusBar backgroundColor={cores.roxo}/>
                <KeyboardAvoidingView 
                    behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                    style={style.preencher}
                >
                    { children }
                </KeyboardAvoidingView>
            </SafeAreaView>
            <SafeAreaView style={styles.ajustScreenBottom} />
        </>
    )
}

export { ScreenDefault }