import React from "react";
import { View, StyleSheet, Alert, ScrollView } from "react-native";
import CustomButton from "../commonComponents/customComponent/CustomButton";

const ButtonScreen = () => {
  const handlePress = (buttonType) => {
    Alert.alert("Button Pressed", `You pressed the ${buttonType} button.`);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <CustomButton
        title="Primary Button"
        onPress={() => handlePress("Primary")}
        style={styles.primaryButton}
        textStyle={styles.primaryButtonText}
      />
      <CustomButton
        title="Secondary Button"
        onPress={() => handlePress("Secondary")}
        style={styles.secondaryButton}
        textStyle={styles.secondaryButtonText}
      />
      <CustomButton
        title="Success Button 👍"
        onPress={() => handlePress("Success")}
        style={styles.successButton}
        textStyle={styles.successButtonText}
      />
      <CustomButton
        title="Danger Button 💀"
        onPress={() => handlePress("Danger")}
        style={styles.dangerButton}
        textStyle={styles.dangerButtonText}
      />
      <CustomButton
        title="Warning Button ⚠️"
        onPress={() => handlePress("Warning")}
        style={styles.warningButton}
        textStyle={styles.warningButtonText}
      />
      <CustomButton
        title="Info Button"
        onPress={() => handlePress("Info")}
        style={styles.infoButton}
        textStyle={styles.infoButtonText}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  primaryButton: {
    backgroundColor: "#1E90FF",
    marginVertical: 10,
  },
  primaryButtonText: {
    color: "#fff",
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
    marginVertical: 10,
  },
  secondaryButtonText: {
    color: "#fff",
  },
  successButton: {
    backgroundColor: "#28a745",
    marginVertical: 10,
  },
  successButtonText: {
    color: "#fff",
  },
  dangerButton: {
    backgroundColor: "#dc3545",
    marginVertical: 10,
  },
  dangerButtonText: {
    color: "#fff",
  },
  warningButton: {
    backgroundColor: "rgb(217 198 142)",
    marginVertical: 10,
  },
  warningButtonText: {
    color: "#000",
  },
  infoButton: {
    backgroundColor: "#17a2b8",
    marginVertical: 10,
  },
  infoButtonText: {
    color: "#fff",
  },
});

export default ButtonScreen;
