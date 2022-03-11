import react from 'react';

import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';
import style from '../../styles';

function ScreenDefault({ children }) {
    return (
        <SafeAreaView style={style.preencher}>
            <StatusBar />
            <KeyboardAvoidingView 
                behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
            >
                { children }
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export { ScreenDefault }