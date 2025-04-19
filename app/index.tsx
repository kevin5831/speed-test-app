import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

export default function Index() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Speed Test App</Text>
            <Link href="/main/(tabs)/speed" style={styles.link}>
                <Text style={styles.linkText}>Get Started</Text>
            </Link>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
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