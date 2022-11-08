import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import logo from '../../../assets/logo.png';
import useTextos from '../../../hooks/useTextos';

export default function Topo({ melhoresProdutores }) {
  const { boasVindas, legenda, legendaMelhoresProdutores } = useTextos();

  return <>
    <View style={estilos.topo}>
      <Image source={logo} style={estilos.imagem} />
      <Text style={estilos.boasVindas}>{melhoresProdutores ? "" : boasVindas}</Text>
      <Text style={estilos.legenda}>{melhoresProdutores ? legendaMelhoresProdutores : legenda}</Text>
    </View>    
  </>
}

const estilos = StyleSheet.create({
  topo: {
    backgroundColor: 'black',
    padding: 16,
  },
  compra: {
    backgroundColor: '#EAF5F3',
    padding: 16,
  },
  compraMensagem: {
    fontSize: 16,
    lineHeight: 26,
    color: '#464646',
  },
  imagem: {
    width: 200,
    height: 200,
    marginLeft: 90,
    alignItems: 'center',
  },
  boasVindas: {
    fontSize: 26,
    lineHeight: 42,
    fontWeight: 'bold',
    color: 'white',
    // backgroundColor: 'gray',
    marginBottom: 8,
  },
  legenda: {
    fontSize: 16,
    lineHeight: 26,
    color: 'white',
    // backgroundColor: 'gray',
  }
});
