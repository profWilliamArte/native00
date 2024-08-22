import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, View} from 'react-native';

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
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Explore</ThemedText>

      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText>Contenido del screen Explore</ThemedText>
      </ThemedView>
      <View style={styles.contImagenes}>
        <Image source={require('@/assets/images/foto1.png')} style={styles.imagen} />
        <Image source={require('@/assets/images/foto2.png')} style={styles.imagen} />
        <Image source={require('@/assets/images/foto3.png')}  style={styles.imagen} />
        <Image source={require('@/assets/images/foto4.png')}  style={styles.imagen} />
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
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
  },
  contImagenes: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },
  imagen: {
    width: 250,
    height: 300,
    borderRadius: 8,
  },

});
