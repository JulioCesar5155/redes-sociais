import React from 'react';
import { View, TouchableOpacity, Text, Linking, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ParallaxScrollView from '@/components/ParallaxScrollView';

const openLinkedin = () => {
  Linking.openURL('https://www.linkedin.com/in/julio-cesar-ferreira-cesar-8124a5314/');
};
const openGithub = () => {
  Linking.openURL('https://github.com/JulioCesar5155');
};
const openTelefone = () => {
  Linking.openURL('tel:18991280446');
};
const openInstagram = () => {
  Linking.openURL('https://www.instagram.com/junin.csr?igsh=M24ycjlzc3RnYWs2');
};
const openWhatsapp = () => {
  Linking.openURL('https://wa.me/18991280446');
};

export default function HomeScreen() {
  return (

    <View style={{backgroundColor: 'black'}}>
      <View style={styles.container2}>
      <Image
          source={require('@/assets/images/fundo2.png')}
          style={styles.reactLogo}
        />
      <View style={{backgroundColor: 'white', borderRadius: 40, width: 300, alignItems: 'center', top: 160, left: 4, height: 250}}>
      <Image source={require('../../assets/images/jj.jpeg')}
        style={styles.bolinha}
        />
        </View>
      </View>
      
      <View style={{backgroundColor: 'white', alignItems: 'center', width: 300, left: 50, borderRadius: 40, top: 90, height: 400}}>
        
        <Text style={{fontWeight: 'bold', top: 5}}>Julio 17 anos</Text>
        <Text style={{fontWeight: 'bold'}}>Etec</Text>
      <TouchableOpacity onPress={openLinkedin} style={styles.button}>
        <View style={{display: 'flex', flexDirection:'row', gap: 15}}>
          <View style={{width: 20, height: 20}}>
            <Ionicons name="logo-linkedin" size={24} color="white"/>
          </View>
          <View style={{width: 80,}}>
            <Text style={styles.buttonText}>Linkedin</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={openGithub} style={styles.button}>
        <Text style={styles.buttonText}><Ionicons name="logo-github" size={24} color="white" />GitHub</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openTelefone} style={styles.button}>
        <Text style={styles.buttonText}><Ionicons name="call" size={24} color="white" />Telefone</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openInstagram} style={styles.button}>
        <Text style={styles.buttonText}><Ionicons name="logo-instagram" size={24} color="white" />Instagram</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={openWhatsapp} style={styles.button}>
        <Text style={styles.buttonText}><Ionicons name="logo-whatsapp" size={24} color="white" />Whatsapp</Text>
      </TouchableOpacity>
    </View>
    
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    
  },
  button: {
    backgroundColor: 'blue',
    width: 200,
    height: 50,
    borderRadius: 15,
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    top: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
  },
  reactLogo: {
    height: 200,
    width: 2000,
    position: 'absolute'
    
  },
  bolinha: {
    borderRadius: 500,
    top: 15,
    width: 150,
    height: 150
    
    
  },
  container2: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    
  },
  
});

