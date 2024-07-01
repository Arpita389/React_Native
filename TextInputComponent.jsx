import React from "react";
import { View, Text, TextInput as RNTextInput, StyleSheet } from "react-native";

const TextInputComponent = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
  style,
  ...props
}) => {
  return (
    <View style={[styles.inputWrapper, style]}>
      {label && <Text style={styles.label}>{label}</Text>}
      <RNTextInput
        style={styles.textInput}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginBottom: 16,
  },
  label: {
    marginBottom: 8,
    fontSize: 16,
    fontWeight: "bold",
  },
  textInput: {
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 8,
    fontSize: 16,
  },
});

export default TextInputComponent;
