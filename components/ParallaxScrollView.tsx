import React, { ReactNode } from 'react';
import {
  Animated,
  StyleSheet,
  View,
  ScrollViewProps,
} from 'react-native';

interface ParallaxScrollViewProps extends ScrollViewProps {
  children: ReactNode;
  headerHeight?: number;
  parallaxHeaderHeight?: number;
  backgroundScrollSpeed?: number;
  fadeOutForeground?: boolean;
  renderBackground?: () => ReactNode;
  renderForeground?: () => ReactNode;
  renderFixedHeader?: () => ReactNode;
  parallaxHeaderContainerStyle?: any;
}

export const ParallaxScrollView: React.FC<ParallaxScrollViewProps> = ({
  children,
  headerHeight = 70,
  parallaxHeaderHeight = 250,
  backgroundScrollSpeed = 5,
  fadeOutForeground = true,
  renderBackground,
  renderForeground,
  renderFixedHeader,
  parallaxHeaderContainerStyle,
  ...scrollViewProps
}) => {
  const scrollY = new Animated.Value(0);

  const translateY = scrollY.interpolate({
    inputRange: [0, 1],
    outputRange: [0, backgroundScrollSpeed],
    extrapolateRight: 'extend',
    extrapolateLeft: 'clamp',
  });

  const opacity = scrollY.interpolate({
    inputRange: [0, parallaxHeaderHeight * 0.5, parallaxHeaderHeight],
    outputRange: [1, 0.3, 0],
    extrapolate: 'clamp',
  });

  const headerTranslate = scrollY.interpolate({
    inputRange: [0, parallaxHeaderHeight],
    outputRange: [0, -headerHeight],
    extrapolate: 'clamp',
  });

  return (
    <View style={styles.container}>
      <Animated.ScrollView
        {...scrollViewProps}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
      >
        <View style={{ marginTop: parallaxHeaderHeight }}>
          {children}
        </View>
        <Animated.View
          style={[
            styles.parallaxHeaderContainer,
            parallaxHeaderContainerStyle,
            { height: parallaxHeaderHeight, transform: [{ translateY }] },
          ]}
        >
          {renderBackground && renderBackground()}
        </Animated.View>
        {renderForeground && (
          <Animated.View
            style={[
              styles.parallaxForeground,
              { height: parallaxHeaderHeight, opacity: fadeOutForeground ? opacity : 1 },
            ]}
          >
            {renderForeground()}
          </Animated.View>
        )}
      </Animated.ScrollView>
      {renderFixedHeader && (
        <Animated.View
          style={[
            styles.fixedHeader,
            { height: headerHeight, transform: [{ translateY: headerTranslate }] },
          ]}
        >
          {renderFixedHeader()}
        </Animated.View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parallaxHeaderContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    overflow: 'hidden',
  },
  parallaxForeground: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 1,
  },
  fixedHeader: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    zIndex: 2,
  },
});

export default ParallaxScrollView;