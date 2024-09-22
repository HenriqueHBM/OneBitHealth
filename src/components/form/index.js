import React from 'react';
import { TextInput, View, Text, Button } from 'react-native';
//import ResultImc from './result_imc';

export default function Form(){
    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput
                    placeholder='Ex. 1.75'
                    keyboardType='numeric'
                />
                <Text>Peso</Text>
                <TextInput
                    placeholder='Ex. 75.220'
                    keyboardType='numeric'
                />
                <Button
                    title='Calcular IMC'
                />
            </View>
            <ResultImc  messageResultImc={messageImc} resultImc={imc} />
        </View>
    )
}