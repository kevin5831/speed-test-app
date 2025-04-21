import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from 'react-native';
import { ThemedView } from '@/components/ThemedView';

export default function VoiceScreen() {
  return (
    <ThemedView style={styles.container}>
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.contentContainer}
      >
        <View>
          <Text style={styles.text}>Home Page</Text>
        </View>
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  scrollView: {
    flex: 1,
  },
  contentContainer: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
  },
});