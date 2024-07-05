import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const EditProfile = ({ route, navigation }) => {
  const { profile, handleUpdateProfile } = route.params;
  const [name, setName] = useState(profile.name);
  const [email, setEmail] = useState(profile.email);
  const [avatar, setAvatar] = useState(profile.avatar);

  const handleSave = () => {
    const updatedProfile = { name, email, avatar };
    handleUpdateProfile(updatedProfile);
    Alert.alert("Profile saved!", "Your profile has been updated.");
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : null}
    >
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.headerText}>Edit Profile</Text>

          <View style={styles.avatarContainer}>
            <Image source={{ uri: avatar }} style={styles.avatar} />
            <TouchableOpacity style={styles.changeAvatarButton}>
              <Icon name="camera" size={24} color="#fff" />
              <Text style={styles.changeAvatarText}>Edit</Text>
            </TouchableOpacity>
          </View>

          <TextInput
            style={styles.input}
            value={name}
            onChangeText={setName}
            placeholder="Name"
            accessibilityLabel="Name Input"
          />
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            accessibilityLabel="Email Input"
          />

          <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
            <Text style={styles.saveButtonText}>Save</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  avatarContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  changeAvatarButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  changeAvatarText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 10,
  },
  input: {
    width: "100%",
    height: 40,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: "#007bff",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 5,
    marginTop: 20,
  },
  saveButtonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});

export default EditProfile;
