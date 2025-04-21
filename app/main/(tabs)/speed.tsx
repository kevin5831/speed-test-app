import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { RewardIcon } from '@/components/icon/reward';
import { SpeedIndicators } from '@/components/SpeedIndicators';
import { Image } from 'react-native';
import { DistanceButtonSVG } from '@/components/DistanceButtonSVG';
import { SpeedometerSVG } from '@/components/Speedometer';

export default function SpeedScreen() {
  const [speed, setSpeed] = useState(100);
  const [distance, setDistance] = useState(16);
  const [speedLimit, setSpeedLimit] = useState(70);
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ThemedView style={styles.container}>
        {/* Banner at the top */}
        <View style={styles.banner}>
          <Image
            source={require('@/assets/images/advertise.png')} // Make sure this path is correct
            style={styles.bannerImage}
          />
        </View>
        {/* Main content area - contains both components */}
        <View style={styles.contentContainer}>
          <View style={styles.speedContainer}>
            <SpeedometerSVG speed={speed} />
            <View style={styles.distanceContainer}>
              <TouchableOpacity style={styles.distanceButton}>
                <DistanceButtonSVG distance={distance} />
              </TouchableOpacity>
            </View>
          </View>
          <SpeedIndicators speedLimit={speedLimit} />
        </View>
        {/* Notification/Reward button */}
        <View>
          <TouchableOpacity style={styles.notificationButton}>
            <RewardIcon focused={false} />
          </TouchableOpacity>
        </View>
      </ThemedView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#1a171f',
    paddingTop: 25,
  },
  banner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#222222',
    height: 80,
  },
  bannerImage: {
    width: '100%',
    height: '100%',
    borderRadius:6,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'flex-start', // previously 'center'
    alignItems: 'center',
    position: 'relative',
    marginTop:"5%"
  },
  speedContainer:{
    marginTop:"28%"
  },
  distanceContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  distanceButton: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 25,
  },
  distanceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    marginTop: 4,
    borderRadius: 10,
    borderWidth:4.5,
    height: '10%',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',

  },
  ButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  notificationButton: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#1a171f',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
});