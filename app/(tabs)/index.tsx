import React from 'react';
import { View, TouchableOpacity, Text, Linking, StyleSheet, Image } from 'react-native';

import ParallaxScrollView from '@/components/ParallaxScrollView';

const openLinkedin = () => {
  Linking.openURL('https://br.linkedin.com/');
};
const openGithub = () => {
  Linking.openURL('https://github.com/');
};
const openTelefone = () => {
  Linking.openURL('https://www.instagram.com/');
};
const openInstagram = () => {
  Linking.openURL('https://www.instagram.com/');
};
const openWhatsapp = () => {
  Linking.openURL('https://www.whatsapp.com/');
};

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/aa.png')}
          style={styles.reactLogo}
        />
      }>
      
      <View style={styles.container}>
      <TouchableOpacity onPress={openLinkedin} style={styles.button}>
        <Text style={styles.buttonText}>Linkedin</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGithub} style={styles.button}>
        <Text style={styles.buttonText}>GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openTelefone} style={styles.button}>
        <Text style={styles.buttonText}>Telefone</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openInstagram} style={styles.button}>
        <Text style={styles.buttonText}>Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openWhatsapp} style={styles.button}>
        <Text style={styles.buttonText}>Whatsapp</Text>
      </TouchableOpacity>
    </View>
    
      
    </ParallaxScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50
  },
  button: {
    backgroundColor: 'blue',
    width: 150,
    height: 50,
    borderRadius: 15,
    marginVertical: 5,
    justifyContent: 'center',
    
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  reactLogo: {
    height: 178,
    width: 280,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});

