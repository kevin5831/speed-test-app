import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';

export default function ImgReportScreen() {
  // Sample report data
  const reportData = {
    date: 'April 19, 2025',
    time: '10:35 AM',
    location: 'Highway 101, San Francisco',
    maxSpeed: 105,
    averageSpeed: 82,
    distance: 15.2,
    duration: '00:18:45',
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <Text style={styles.reportTitle}>Speed Report</Text>
          <Text style={styles.reportDate}>{reportData.date} • {reportData.time}</Text>
        </View>
        
        <View style={styles.mapContainer}>
          {/* Placeholder for map image */}
          <View style={styles.mapPlaceholder}>
            <Text style={styles.mapPlaceholderText}>Map View</Text>
            <Text style={styles.mapLocation}>{reportData.location}</Text>
          </View>
        </View>
        
        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{reportData.maxSpeed}</Text>
            <Text style={styles.statLabel}>Max Speed (km/h)</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{reportData.averageSpeed}</Text>
            <Text style={styles.statLabel}>Avg Speed (km/h)</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{reportData.distance}</Text>
            <Text style={styles.statLabel}>Distance (km)</Text>
          </View>
          
          <View style={styles.statCard}>
            <Text style={styles.statValue}>{reportData.duration}</Text>
            <Text style={styles.statLabel}>Duration</Text>
          </View>
        </View>
        
        <View style={styles.speedChartContainer}>
          <Text style={styles.sectionTitle}>Speed Over Time</Text>
          {/* Placeholder for speed chart */}
          <View style={styles.chartPlaceholder}>
            <Text style={styles.placeholderText}>Speed Chart</Text>
          </View>
        </View>
        
        <View style={styles.imageGalleryContainer}>
          <Text style={styles.sectionTitle}>Images</Text>
          <View style={styles.imageGrid}>
            {/* Placeholder for images */}
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>Image 1</Text>
            </View>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>Image 2</Text>
            </View>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>Image 3</Text>
            </View>
            <View style={styles.imagePlaceholder}>
              <Text style={styles.placeholderText}>Image 4</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      
      <TouchableOpacity 
        style={styles.shareButton}
        onPress={() => {
          // Share functionality would go here
          alert('Share functionality would be implemented here');
        }}
      >
        <Text style={styles.shareButtonText}>Share Report</Text>
      </TouchableOpacity>
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
    paddingTop: 15,
  },
  reportTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  reportDate: {
    fontSize: 14,
    color: '#aaa',
  },
  mapContainer: {
    padding: 15,
  },
  mapPlaceholder: {
    backgroundColor: '#1e1e1e',
    height: 180,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mapPlaceholderText: {
    color: '#666',
    fontSize: 18,
    fontWeight: 'bold',
  },
  mapLocation: {
    color: '#999',
    fontSize: 14,
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#1e1e1e',
    width: '48%',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#d32f2f',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#aaa',
  },
  speedChartContainer: {
    padding: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 15,
  },
  chartPlaceholder: {
    backgroundColor: '#1e1e1e',
    height: 200,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeholderText: {
    color: '#666',
    fontSize: 16,
  },
  imageGalleryContainer: {
    padding: 15,
    marginBottom: 80, // Space for the share button
  },
  imageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imagePlaceholder: {
    backgroundColor: '#1e1e1e',
    width: '48%',
    height: 120,
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  shareButton: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#d32f2f',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  shareButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});