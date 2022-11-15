import 'react-native-gesture-handler';
import * as React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';

const produtosCadastrados = [
  {
    id: 1,
    nomeProduto : "Iphone 13",
    categoria : "Celulares",
    cor : "Branco",
    preco : "4.500,00",
    descricao : "256gb Câmera 12mp",
    marca : "Apple",
    foto : "",
  },
  {
    id: 2,
    nomeProduto : "Notebook Samsung",
    categoria : "Laptops",
    cor : "Branco",
    preco : "3.600,00",
    descricao : "Hd 1t 4g de memória",
    marca : "Samsung",
    foto : "",
  },
  {
    id: 3,
    nomeProduto : "Geladeira Brastemp",
    categoria : "Cozinha",
    cor : "Branco",
    preco : "5.200,00",
    descricao : "Com freezer duplo filtro",
    marca : "Brastemp",
    foto : "",
  },
  {
    id: 4,
    nomeProduto : "Smart tv 55'",
    categoria : "TVs",
    cor : "Preto",
    preco : "3.490,00",
    descricao : "bluetooth wifi controle assistivo",
    marca : "Sony",
    foto : "",
  },
  {
    id: 5,
    nomeProduto : "Microondas Electrolux",
    categoria : "Cozinha",
    cor : "Branco",
    preco : "1.900,00",
    descricao : "Com sistema anti chamas",
    marca : "Electrolux",
    foto : "",
  },
  {
    id: 6,
    nomeProduto : "Fogão por indução",
    categoria : "Cozinha",
    cor : "Preto",
    preco : "2.400,00",
    descricao : "Não precisa de fósforo",
    marca : "Electrolux",
    foto : "",
  },
]

// Tela inicial
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Mostrar Produtos"
        onPress={() => navigation.navigate('MostrarProdutos')}
      />
      <Button
        title="Alterar Produtos"
        onPress={() => navigation.navigate('AlterarProdutos')}
      />
    </View>
  );
}

// tela para mostrar todos os produtos
function MostrarProdutos({ navigation }) {
  
  function Produtos(){
    return produtosCadastrados.map(produto => {
      return(
        <View style={styles.produto}>
          <Text style={styles.tituloProduto}>{produto.nomeProduto}</Text>
          <Text>Categoria: {produto.categoria}</Text>
          <Text>Marca: {produto.marca}</Text>
          <Text>Descrição: {produto.descricao}</Text>
        </View>
      )
    })
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{color: '#a1a1a1', fontSize: 20, marginBottom: 20, }}>Todos os Produtos</Text>
      <Produtos/>
      <Button title="Voltar" onPress={() => navigation.goBack()} />
    </View>
  );
}

function AlterarProdutos({ navigation }) {
  function Produtos(){
    return produtosCadastrados.map(produto => {
      return(
        <View style={{width: '100%'}}>
          <View style={styles.produto}>
            <Text style={styles.tituloProduto}>{produto.nomeProduto}</Text>
            <TextInput></TextInput>
            <Button title='alterar nome' onPress={() => produto.nomeProduto = "eita"}/>
          </View>
          <Text>Alterar 1</Text>
        </View>
      )
    })
  }
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
      <Produtos/>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

function SettingsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Go back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="AlterarProdutos" component={AlterarProdutos} />
      <Stack.Screen name="MostrarProdutos" component={MostrarProdutos} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  produto: {
    borderWidth: 1,
    borderColor: '#000',
    width: '90%',
    padding: 5,
    marginBottom: 5,
    alignSelf: 'center',
  },
  tituloProduto: {
    backgroundColor: '#ccc',
    textAlign: 'center',
    fontSize: 20,
  },
});
