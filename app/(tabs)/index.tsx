import { Image, StyleSheet, Text } from 'react-native';


import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Home</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
      <Image 
        source={require('@/assets/images/logo.jpg')}/>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.titulo}>Que es React Native</Text>
       
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <Text style={styles.subtitulo}>
          React Native es un framework de código abierto desarrollado por Facebook (ahora Meta) que permite crear aplicaciones móviles nativas utilizando JavaScript y React
          </Text>
        </ThemedView>
    
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#bdc3c7',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#bdc3c7',
    textAlign: 'center',
  },
});
