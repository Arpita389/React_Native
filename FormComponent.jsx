import React, { useState } from "react";
import { View, Button, Alert, StyleSheet } from "react-native";
import TextInputComponent from "./TextInputComponent";

const FormComponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    Alert.alert("Form Data Submitted", JSON.stringify(formData));
  };

  return (
    <View style={styles.container}>
      <TextInputComponent
        label="Username"
        value={formData.username}
        onChangeText={(text) => handleChange("username", text)}
        placeholder="Enter your username"
      />
      <TextInputComponent
        label="Email"
        value={formData.email}
        onChangeText={(text) => handleChange("email", text)}
        placeholder="Enter your email"
        keyboardType="email-address"
      />
      <TextInputComponent
        label="Password"
        value={formData.password}
        onChangeText={(text) => handleChange("password", text)}
        placeholder="Enter your password"
        secureTextEntry
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
  },
});

export default FormComponent;
