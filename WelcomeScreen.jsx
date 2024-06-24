// src/WelcomeScreen.js
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  ImageBackground,
  Image,
} from "react-native";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={{
        uri: "https://images.unsplash.com/photo-1570857502809-08184874388e?q=80&w=1156&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://plus.unsplash.com/premium_photo-1661964205360-b0621b5a9366?q=80&w=1138&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      style={styles.background}
    >
      <View style={styles.overlay}>
        <Image
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/015/584/182/original/online-shop-logo-design-free-vector.jpg",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to Shopping App</Text>
        <Text style={styles.subtitle}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab,
          sapiente doloribus debitis !
        </Text>
        <Button title="Login" />
        <View style={{ marginVertical: 10 }} />
        <Button title="Register" />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.6)",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 20,
    alignItems: "center",
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    color: "#fff",
    marginBottom: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
});

export default WelcomeScreen;
