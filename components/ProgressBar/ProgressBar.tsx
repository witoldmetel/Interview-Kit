import React from "react";
import { View, StyleSheet } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from "react-native-reanimated";

type ProgressBarProps = {
  step: number;
  totalSteps: number;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  step,
  totalSteps,
}) => {
  const progress = step / totalSteps;

  const animatedProgress = useDerivedValue(() =>
    withTiming(progress, { duration: 300 })
  );

  const animatedStyle = useAnimatedStyle(() => {
    const width = interpolate(animatedProgress.value, [0, 1], [0, 100]);

    return {
      width: `${width}%`,
    };
  });

  return (
    <View style={styles.wrapper}>
      <Animated.View style={animatedStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    height: "4px",
    backgroundColor: "#ccc",
    borderRadius: 2,
    marginVertical: "12px",
  },
  progressBarFill: {
    height: "100%",
    backgroundColor: "#f63501",
    borderRadius: 2,
  },
});
