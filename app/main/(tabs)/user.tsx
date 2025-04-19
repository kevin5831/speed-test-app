import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function UserScreen() {
  return (
    <ThemedView style={styles.container}>
      <View>
        <Text style={styles.linkText}>Welcome!</Text>
      </View>
      <Link href={'/main/(tabs)/home'} style={styles.link}>
        <Text style={styles.linkText}>Go to Home!</Text>
      </Link>
      <Link href={'/agree/agree'} style={styles.link}>
        <Text style={styles.linkText}>Go to agree!</Text>
      </Link>
      <Link href={'/main/(non-tabs)/ImgReport'} style={styles.link}>
        <Text style={styles.linkText}>Go to imgReport!</Text>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    backgroundColor: '#000000', // Explicitly set black background
  },
  link: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#d32f2f',
    borderRadius: 5,
  },
  linkText: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});