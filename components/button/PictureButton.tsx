// components/icon/picture.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path, Rect, Defs, LinearGradient, Stop } from "react-native-svg";

interface PictureButtonProps {
  focused?: boolean;
}

export const PictureButton: React.FC<PictureButtonProps> = ({ focused = false }) => {
  const color = focused ? "#FF4D4D" : "#E6D8D9";

  return (
    <View style={styles.container}>
      <Svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <Defs>
          <LinearGradient
            id="paint0_linear_1786_10962"
            x1="6.28148e-07"
            y1="0.447557"
            x2="64"
            y2="63.5524"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF4D4D" />
            <Stop offset="1" stopColor="#BD001F" />
          </LinearGradient>
        </Defs>
        <Rect
          x="0.5"
          y="0.5"
          width="63"
          height="63"
          rx="31.5"
          fill="url(#paint0_linear_1786_10962)"
        />
        <Rect
          x="0.5"
          y="0.5"
          width="63"
          height="63"
          rx="31.5"
          stroke="#FF4040"
        />
        <Path
          d="M41.998 14.8H22.0049C18.0259 14.8 14.8008 18.0252 14.8008 22.0042V41.9959C14.8008 45.9749 18.0259 49.2001 22.0049 49.2001H41.9967C45.9757 49.2001 49.2008 45.9749 49.2008 41.9959V22.0042C49.2008 18.0252 45.9757 14.8 41.9967 14.8H41.998ZM46.4057 40.9437C46.4057 43.9592 43.9613 46.4049 40.9445 46.4049H23.0571C20.0416 46.4049 17.5959 43.9606 17.5959 40.9437V23.0564C17.5959 20.0409 20.0403 17.5952 23.0571 17.5952H40.9445C43.96 17.5952 46.4057 20.0395 46.4057 23.0564V40.9437Z"
          fill={color}
        />
        <Path
          d="M16.6431 42.4542L15.2389 40.683C17.9009 37.7562 22.0291 36.8653 24.4547 36.8586C27.3237 36.8505 31.2086 38.0304 33.6705 40.7448L32.023 42.4542C27.5965 38.1862 21.1153 38.2911 16.6418 42.4542H16.6431Z"
          fill={color}
        />
        <Path
          d="M31.1374 47.1857H28.2214C28.8677 41.4221 32.0015 38.1352 35.1137 35.7929C37.7973 33.7732 42.4966 32.4724 47.4162 32.4724V35.2944C39.0107 35.4812 33.0295 38.8098 31.1387 47.1843L31.1374 47.1857Z"
          fill={color}
        />
        <Path
          d="M25.4491 20.1457C22.6513 20.1457 20.3843 22.4127 20.3843 25.2105C20.3843 28.0083 22.6513 30.2753 25.4491 30.2753C28.2469 30.2753 30.5139 28.0083 30.5139 25.2105C30.5139 22.4127 28.2469 20.1457 25.4491 20.1457ZM25.4491 27.8564C23.9884 27.8564 22.8031 26.6725 22.8031 25.2105C22.8031 23.7484 23.987 22.5645 25.4491 22.5645C26.9111 22.5645 28.095 23.7484 28.095 25.2105C28.095 26.6725 26.9111 27.8564 25.4491 27.8564Z"
          fill={color}
        />
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
  },
});