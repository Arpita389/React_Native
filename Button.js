import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({
  title,
  onPress,
  style,
  textStyle,
  size,
  type,
  color,
  ...props
}) => {
  const buttonStyles = [
    styles.button,
    styles[size],
    styles[type],
    { backgroundColor: color || styles.button.backgroundColor },
    style,
  ];
  const textStyles = [styles.buttonText, styles[`${size}Text`], textStyle];

  return (
    <TouchableOpacity style={buttonStyles} onPress={onPress} {...props}>
      <Text style={textStyles}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    paddingVertical: 10,
    paddingHorizontal: 12,
    backgroundColor: "#007bff",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  small: {
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  smallText: {
    fontSize: 14,
  },
  large: {
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  largeText: {
    fontSize: 18,
  },
  login: {
    backgroundColor: "#28a745",
  },
  register: {
    backgroundColor: "#17a2b8",
  },
  addToCart: {
    backgroundColor: "#ffc107",
  },
});

export default Button;
