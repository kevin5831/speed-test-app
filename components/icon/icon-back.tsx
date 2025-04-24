// components/icon/icon-back.tsx
import React from "react";
import { View, StyleSheet } from "react-native";
import Svg, { Path } from "react-native-svg";

interface IconBackProps {
  focused?: boolean;
}

export const IconBack: React.FC<IconBackProps> = ({ focused = false }) => {
  const color = focused ? "#FF4D4D" : "#E6D8D9";

  return (
    <View style={styles.container}>
      <Svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <Path
          d="M20.5697 27.0013C20.0205 27.0013 19.4937 26.7831 19.1054 26.3947L10.262 17.4703C9.43349 16.4623 9.43349 15.7936 10.262 14.7905C12.9857 12.0519 18.9558 6.04901 19.104 5.9007C19.2962 5.7084 19.5244 5.55584 19.7756 5.45173C20.0268 5.34763 20.296 5.29401 20.5679 5.29395C20.8397 5.29388 21.109 5.34737 21.3602 5.45136C21.6114 5.55535 21.8397 5.7078 22.032 5.90001C22.2243 6.09222 22.3769 6.32043 22.481 6.5716C22.5851 6.82277 22.6387 7.09198 22.6388 7.36388C22.6388 7.63577 22.5853 7.90501 22.4813 8.15623C22.3774 8.40745 22.2249 8.63572 22.0327 8.82803L14.7123 16.147L22.0341 23.466C22.4224 23.8544 22.6406 24.3811 22.6406 24.9304C22.6406 25.4796 22.4224 26.0064 22.0341 26.3947C21.6457 26.7831 21.119 27.0013 20.5697 27.0013Z"
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
    width: 36,
    height: 36,
  },
});
