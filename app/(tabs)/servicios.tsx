import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform } from 'react-native';

import { Collapsible } from '@/components/Collapsible';
import { ExternalLink } from '@/components/ExternalLink';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
const servicios = () => {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#8e44ad', dark: '#2c3e50' }}
      headerImage={<Ionicons size={350} name="map" style={styles.headerImage} />}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Servicios</ThemedText>
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Contenido del screen Servicios</ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  )
}
const styles = StyleSheet.create({
    headerImage: {
      color: '#808080',
      bottom: -90,
      left: -35,
      position: 'absolute',
    },
    titleContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 8,
    },
  });
export default servicios