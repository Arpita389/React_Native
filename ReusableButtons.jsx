import React from "react";
import { View, StyleSheet } from "react-native";
import Button from "./Button";

const ReusableButtons = () => {
  const handleLogin = () => {
    console.log("Login button pressed");
  };

  const handleRegister = () => {
    console.log("Register button pressed");
  };

  const handleAddToCart = () => {
    console.log("Add to Cart button pressed");
  };

  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={handleLogin}
        style={styles.loginButton}
        size="large"
        textStyle={styles.buttonText}
        color="#28a745"
      />
      <Button
        title="Register"
        onPress={handleRegister}
        style={styles.registerButton}
        size="large"
        textStyle={styles.buttonText}
        color="#17a2b8"
      />
      <Button
        title="Add to Cart"
        onPress={handleAddToCart}
        style={styles.addToCartButton}
        size="small"
        textStyle={styles.buttonText}
        color="#ffc107"
      />
      <Button
        title="Small Button"
        onPress={() => console.log("Small button pressed")}
        size="small"
      />
      <Button
        title="Large Button"
        onPress={() => console.log("Large button pressed")}
        size="large"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#f8f9fa",
  },
  loginButton: {
    marginBottom: 10,
  },
  registerButton: {
    marginBottom: 10,
  },
  addToCartButton: {
    marginBottom: 10,
  },
  buttonText: {
    color: "#fff",
  },
});

export default ReusableButtons;
