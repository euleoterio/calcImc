import React, { Component, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

function Imc() {
  function handleSubmit() {
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    alert(
      imc < 18.6
        ? `Abaixo do peso! Seu IMC é: ${imc.toFixed(2)}`
        : imc >= 18.6 && imc < 24.9
        ? `Peso ideal! Seu IMC é: ${imc.toFixed(2)}`
        : imc >= 24.9 && imc < 34.9
        ? `Levemente acima do peso! Seu IMC é: ${imc.toFixed(2)}`
        : `Acima do peso! Seu IMC é: ${imc.toFixed(2)}`
    );
  }

  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  return (
    <View>
      <TextInput
        style={styles.input}
        value={peso}
        onChangeText={(peso) => setPeso(peso)}
        placeholder="Peso (kg)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        value={altura}
        onChangeText={(altura) => setAltura(altura)}
        placeholder="Altura (cm)"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Calcular</Text>
      </TouchableOpacity>
    </View>
  );
}
export default class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Calcule seu IMC </Text>
        <Imc />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  title: {
    textAlign: 'center',
    marginTop: 25,
    fontSize: 35,
    color: '#fff',
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#121212',
    fontSize: 23,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 25,
  },
});
