import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={<Ionicons size={310} name="code-slash" style={styles.headerImage} />}>
     <View style={styles.titleContainer}>
          <Text style={{fontSize: 50, color: 'white'}}>Sobre</Text>
        </View>
      <View style={styles.container}>
        <Image source={require('../../assets/images/jj.jpeg')} style={styles.image}/>
      <Text style={styles.text}>Julio Cesar</Text>      
      <Text style={styles.text}>Estudante</Text>
      <Text style={styles.text}>17 anos</Text>            
      </View>
   
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    gap: 8,
    alignItems: 'center',
    color: 'white',
    fontSize: 50
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    width: 325,
    height: 400
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 15

  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 500,
    bottom: 50
  }
 
  
});
