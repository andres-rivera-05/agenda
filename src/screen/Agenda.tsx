import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

interface agendaComponent {
  contactoID: number;
  contacto: number;
  nombre: string;
}

export default function Agenda() {
  const [contacto, setContacto] = useState<agendaComponent[]>([]);
  const [contInputText, setConInputText] = useState('');
  const [nomInputText, setNomInputText] = useState('');

  const objetContacto: agendaComponent[] = [
    {
      contactoID: 1,
      contacto: 12324345,
      nombre: 'andres',
    },
  ];

  const getContacto = () => {
    setContacto(objetContacto);
  };

  useEffect(() => {
    getContacto();
  }, []);

  const agregaContacto = () => {
    if (nomInputText.length < 3) {
      Alert.alert('Ups', 'El nombre debe tener al menos 3 caracteres');
      return;
    }

    if (contInputText.length < 8) {
      Alert.alert(
        'Ups',
        'El número de contacto debe tener al menos 8 caracteres',
      );
      return;
    }
    let newContacto: agendaComponent = {
      contactoID: contacto.length + 1,
      contacto: parseInt(contInputText),
      nombre: nomInputText,
    };
    setContacto([...contacto, newContacto]);
    setConInputText('');
    setNomInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setConInputText}
        value={contInputText}
        placeholder="Ingrese número de contacto"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setNomInputText}
        value={nomInputText}
        placeholder="Ingrese nombre de contacto"
      />
      <Button title="Agregar" onPress={agregaContacto}></Button>

      <ScrollView contentContainerStyle={styles.contactList}>
        {contacto.map(elemento => (
          <View key={elemento.contactoID}>
            <Text>{elemento.nombre}</Text>
            <Text>{elemento.contacto}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#f5f5f5',
  },
  contactList: {
    width: '100%',
    marginTop: 20,
  },
  contactItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  contactNumber: {
    fontSize: 14,
    color: '#555555',
  },
});
