import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, {
  Circle,
  Path,
  Defs,
  LinearGradient,
  Stop,
  Mask,
  G,
  Ellipse,
  Rect,
  RadialGradient,
} from "react-native-svg";

export const SpeedometerSVG = ({ speed = 100 }) => {
  return (
    <View style={styles.container}>
      <Svg
        width="282"
        height="286"
        viewBox="0 0 282 286"
        fill="none"
      >
        <Defs>
          <RadialGradient
            id="paint0_radial_1460_12185"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(120.468 259.368) rotate(-117.571) scale(178.51 213.819)"
          >
            <Stop offset="0.0772723" stopColor="#000000" />
            <Stop offset="1" stopColor="#FF0000" stopOpacity="0" />
          </RadialGradient>

          <RadialGradient
            id="paint1_radial_1460_12185"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(142.163 143.163) rotate(90) scale(99.1628)"
          >
            <Stop offset="0.692316" stopColor="#111112" />
            <Stop offset="1" stopColor="#111112" stopOpacity="0" />
          </RadialGradient>

          <LinearGradient
            id="paint2_linear_1460_12185"
            x1="142"
            y1="52.4189"
            x2="142"
            y2="233.582"
            gradientUnits="userSpaceOnUse"
          >
            <Stop stopColor="#FF0000" />
            <Stop offset="1" stopColor="#770000" />
          </LinearGradient>
          
          <Mask id="path-2-inside-1_1460_12185">
            <Path d="M221.915 63.0859C227.766 57.2344 227.814 47.6672 221.319 42.5392C210.172 33.738 197.609 26.8313 184.132 22.1334C165.926 15.787 146.521 13.6355 127.367 15.8397C108.213 18.0439 89.8037 24.5467 73.5149 34.8627C57.226 45.1787 43.478 59.0412 33.2976 75.4151C23.1172 91.7891 16.7673 110.251 14.7221 129.423C12.677 148.595 14.9894 167.982 21.4867 186.135C27.984 204.288 38.4984 220.738 52.2446 234.258C62.4201 244.266 74.1719 252.477 86.9965 258.58C94.4688 262.136 103.028 257.86 105.687 250.024C108.345 242.187 104.074 233.778 96.734 229.957C88.13 225.478 80.2133 219.733 73.2582 212.893C62.7303 202.538 54.6776 189.939 49.7014 176.036C44.7253 162.133 42.9542 147.285 44.5206 132.602C46.0869 117.919 50.9501 103.779 58.7471 91.2383C66.5441 78.6978 77.0734 68.0808 89.5487 60.18C102.024 52.2793 116.123 47.2989 130.793 45.6107C145.463 43.9226 160.325 45.5703 174.268 50.4309C183.48 53.642 192.134 58.2005 199.957 63.9352C206.632 68.8276 216.063 68.9375 221.915 63.0859Z" />
          </Mask>
        </Defs>

        {/* Background ellipse - simplified without filter */}
        <Ellipse
          cx="141.046"
          cy="143.047"
          rx="127.137"
          ry="128.953"
          fill="#0A0A0B"
        />
        
        {/* Red arc */}
        <Path
          d="M221.915 63.0859C227.766 57.2344 227.814 47.6672 221.319 42.5392C210.172 33.738 197.609 26.8313 184.132 22.1334C165.926 15.787 146.521 13.6355 127.367 15.8397C108.213 18.0439 89.8037 24.5467 73.5149 34.8627C57.226 45.1787 43.478 59.0412 33.2976 75.4151C23.1172 91.7891 16.7673 110.251 14.7221 129.423C12.677 148.595 14.9894 167.982 21.4867 186.135C27.984 204.288 38.4984 220.738 52.2446 234.258C62.4201 244.266 74.1719 252.477 86.9965 258.58C94.4688 262.136 103.028 257.86 105.687 250.024C108.345 242.187 104.074 233.778 96.734 229.957C88.13 225.478 80.2133 219.733 73.2582 212.893C62.7303 202.538 54.6776 189.939 49.7014 176.036C44.7253 162.133 42.9542 147.285 44.5206 132.602C46.0869 117.919 50.9501 103.779 58.7471 91.2383C66.5441 78.6978 77.0734 68.0808 89.5487 60.18C102.024 52.2793 116.123 47.2989 130.793 45.6107C145.463 43.9226 160.325 45.5703 174.268 50.4309C183.48 53.642 192.134 58.2005 199.957 63.9352C206.632 68.8276 216.063 68.9375 221.915 63.0859Z"
          fill="#EF3A42"
        />
        
        {/* Red arc with radial gradient */}
        <Path
          d="M221.915 63.0859C227.766 57.2344 227.814 47.6672 221.319 42.5392C210.172 33.738 197.609 26.8313 184.132 22.1334C165.926 15.787 146.521 13.6355 127.367 15.8397C108.213 18.0439 89.8037 24.5467 73.5149 34.8627C57.226 45.1787 43.478 59.0412 33.2976 75.4151C23.1172 91.7891 16.7673 110.251 14.7221 129.423C12.677 148.595 14.9894 167.982 21.4867 186.135C27.984 204.288 38.4984 220.738 52.2446 234.258C62.4201 244.266 74.1719 252.477 86.9965 258.58C94.4688 262.136 103.028 257.86 105.687 250.024C108.345 242.187 104.074 233.778 96.734 229.957C88.13 225.478 80.2133 219.733 73.2582 212.893C62.7303 202.538 54.6776 189.939 49.7014 176.036C44.7253 162.133 42.9542 147.285 44.5206 132.602C46.0869 117.919 50.9501 103.779 58.7471 91.2383C66.5441 78.6978 77.0734 68.0808 89.5487 60.18C102.024 52.2793 116.123 47.2989 130.793 45.6107C145.463 43.9226 160.325 45.5703 174.268 50.4309C183.48 53.642 192.134 58.2005 199.957 63.9352C206.632 68.8276 216.063 68.9375 221.915 63.0859Z"
          fill="url(#paint0_radial_1460_12185)"
        />
        
        {/* Inner darker circle - simplified without filter */}
        <Rect
          x="43"
          y="44.0005"
          width="198.326"
          height="198.326"
          rx="99.1628"
          fill="#222225"
        />
        
        {/* Inner darker circle with radial gradient */}
        <Rect
          x="43"
          y="44.0005"
          width="198.326"
          height="198.326"
          rx="99.1628"
          fill="url(#paint1_radial_1460_12185)"
        />
        
        {/* Circle stroke with gradient */}
        <Circle
          cx="142"
          cy="143"
          r="89.6279"
          stroke="url(#paint2_linear_1460_12185)"
          strokeOpacity="0.5"
          strokeWidth="1.90698"
        />
      </Svg>
      <View style={styles.speedValueContainer}>
        <Text style={styles.speedValueText}>{speed}</Text>
        <Text style={styles.speedUnitText}>Km/h</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
  },
  speedValueContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
  speedValueText: {
    fontSize: 72,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  speedUnitText: {
    fontSize: 14,
    color: "#999999",
    marginTop: -5,
  },
});