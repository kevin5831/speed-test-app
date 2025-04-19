import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { router } from 'expo-router';

export default function VoiceReportScreen() {
  const [isRecording, setIsRecording] = useState(false);
  const [recordings, setRecordings] = useState([
    { id: '1', date: 'Today, 10:30 AM', duration: '00:32', title: 'Highway speed alert' },
    { id: '2', date: 'Yesterday, 3:15 PM', duration: '01:15', title: 'Traffic conditions' },
    { id: '3', date: 'Apr 17, 2025', duration: '00:47', title: 'Route planning notes' },
  ]);

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    if (isRecording) {
      // Simulate adding a new recording when stopping
      const newRecording = {
        id: `${recordings.length + 1}`,
        date: 'Just now',
        duration: '00:00',
        title: 'New voice note'
      };
      
      setRecordings([newRecording, ...recordings]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Voice Reports</Text>
        <Text style={styles.headerSubtitle}>Record voice notes about your trips</Text>
      </View>
      
      <ScrollView style={styles.recordingsContainer}>
        {recordings.map(recording => (
          <TouchableOpacity 
            key={recording.id} 
            style={styles.recordingItem}
            onPress={() => {
              // Play recording functionality would go here
              alert(`Playing recording: ${recording.title}`);
            }}
          >
            <View style={styles.recordingIcon}>
              <Text style={styles.recordingIconText}>🔊</Text>
            </View>
            
            <View style={styles.recordingDetails}>
              <Text style={styles.recordingTitle}>{recording.title}</Text>
              <Text style={styles.recordingMeta}>{recording.date} • {recording.duration}</Text>
            </View>
            
            <TouchableOpacity 
              style={styles.recordingAction}
              onPress={(e) => {
                e.stopPropagation();
                // Delete functionality would go here
                setRecordings(recordings.filter(r => r.id !== recording.id));
              }}
            >
              <Text style={styles.recordingActionText}>🗑️</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
      
      <View style={styles.recordingControlsContainer}>
        <TouchableOpacity 
          style={[
            styles.recordButton,
            isRecording ? styles.recordingActive : {}
          ]}
          onPress={toggleRecording}
        >
          <View style={[
            styles.recordButtonInner,
            isRecording ? styles.recordButtonStop : {}
          ]} />
        </TouchableOpacity>
        
        <Text style={styles.recordingStatus}>
          {isRecording ? 'Recording... Tap to stop' : 'Tap to start recording'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  headerSubtitle: {
    fontSize: 14,
    color: '#aaa',
  },
  recordingsContainer: {
    flex: 1,
    padding: 15,
  },
  recordingItem: {
    flexDirection: 'row',
    backgroundColor: '#1e1e1e',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
  },
  recordingIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  recordingIconText: {
    fontSize: 16,
  },
  recordingDetails: {
    flex: 1,
  },
  recordingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  recordingMeta: {
    fontSize: 12,
    color: '#999',
  },
  recordingAction: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recordingActionText: {
    fontSize: 18,
  },
  recordingControlsContainer: {
    alignItems: 'center',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  recordButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#d32f2f',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  recordingActive: {
    backgroundColor: '#ff6659',
  },
  recordButtonInner: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#fff',
  },
  recordButtonStop: {
    borderRadius: 5,
    width: 20,
    height: 20,
  },
  recordingStatus: {
    color: '#aaa',
    fontSize: 14,
  },
});