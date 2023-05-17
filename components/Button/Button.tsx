import React from "react";
import {
  Pressable,
  Text,
  Platform,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
} from "react-native";

import { getButtonStyle } from "./utils";

interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  variant?: "text" | "contained" | "outlined";
  disabled?: boolean;
  loading?: boolean;
  style?: StyleProp<ViewStyle>;

  onPress: VoidFunction;
}

export function Button({
  onPress,
  text,
  children,
  variant = "text",
  disabled,
  loading,
  style,
}: ButtonProps) {
  const { buttonStyle, textStyle } = getButtonStyle(variant, disabled);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        buttonStyle,
        style,
        { opacity: pressed ? 0.6 : 1 },
      ]}
      onPress={onPress}
      disabled={disabled}
      testID="button">
      {loading ? (
        <ActivityIndicator
          size="small"
          color={textStyle.color}
          testID="loading-indicator"
        />
      ) : children ? (
        children
      ) : (
        <Text style={textStyle}>{text}</Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    ...Platform.select({
      ios: {
        elevation: 2,
      },
      android: {
        elevation: 0,
      },
      default: {
        // other platforms, web for example
        elevation: 2,
      },
    }),
  },
});
