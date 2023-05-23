import MaterialIcon from "@expo/vector-icons/MaterialCommunityIcons";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

type TopSectionProps = {
  title?: string;

  onLeftIconPress: () => void;
  onRightIconPress: () => void;
};

export const TopSection = ({
  title,
  onLeftIconPress,
  onRightIconPress,
}: TopSectionProps) => {
  return (
    <View>
      <TouchableOpacity onPress={onLeftIconPress}>
        <MaterialIcon name="arrow-left" size={24} color="#612e3a" />
      </TouchableOpacity>

      {title ? <Text style={styles.title}>{title}</Text> : null}

      <TouchableOpacity onPress={onRightIconPress}>
        <MaterialIcon name="close" size={24} color="#612e3a" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: "10px",
  },
  title: {
    color: "#612e3a",
    fontFamily: "bold",
    fontSize: 16,
  },
});
