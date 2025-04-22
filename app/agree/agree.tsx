import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function AgreeScreen() {
  const router = useRouter();

  const handleAccept = () => {
    // Always use the same path format when navigating back to maintain consistency
    router.replace('/main/(tabs)/alarm');
  };

  const handleDecline = () => {
    // Match the same path format for consistency
    router.replace('/main/(tabs)/alarm');
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Terms and Conditions</ThemedText>
      
      <Text style={styles.paragraph}>
        Please read and accept our terms and conditions to continue using the app.
      </Text>
      
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAccept}>
          <Text style={styles.buttonText}>Accept</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.declineButton} onPress={handleDecline}>
          <Text style={styles.buttonText}>Decline</Text>
        </TouchableOpacity>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    color: '#111111',
    fontSize: 16,
    lineHeight: 24,
    marginVertical: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 30,
    width: '100%',
    justifyContent: 'space-around',
  },
  acceptButton: {
    backgroundColor: '#FF4D4D',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  declineButton: {
    backgroundColor: '#333333',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    minWidth: 120,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});