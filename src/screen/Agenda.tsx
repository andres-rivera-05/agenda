import {View, Text, TextInput, Button} from 'react-native';
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
    <View>
      <TextInput
        onChangeText={setConInputText}
        value={contInputText}
        placeholder="Ingrese número de contacto"
        keyboardType="numeric"
      />
      <TextInput
        onChangeText={setNomInputText}
        value={nomInputText}
        placeholder="Ingrese nombre"
      />
      <Button title="Agregar" onPress={agregaContacto}></Button>

      {contacto.map(elemento => (
        <View key={elemento.contactoID}>
          <Text>{elemento.nombre}</Text>
          <Text>{elemento.contacto}</Text>
        </View>
      ))}
    </View>
  );
}
