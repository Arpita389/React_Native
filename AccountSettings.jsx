import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const AccountSettings = ({ navigation }) => {
  const dummyProfile = {
    image:
      "https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png",
    name: "Arpita Mohapatra",
    email: "Arpita@example.com",
  };
  //https://cdn3.iconfinder.com/data/icons/3d-printing-icon-set/512/User.png
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Account Settings</Text>
      <View style={styles.profileContainer}>
        <Image
          source={{
            uri: dummyProfile.image,
          }}
          style={styles.avatar}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{dummyProfile.name}</Text>
          <Text style={styles.profileEmail}>{dummyProfile.email}</Text>
        </View>
      </View>

      <TouchableOpacity
        style={styles.option}
        //onPress={() => navigation.navigate("EditProfile")}
      >
        <Text style={styles.optionText}>Edit Profile</Text>
        <Icon name="angle-right" size={24} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.option}
        //onPress={() => navigation.navigate("SavedAddresses")}
      >
        <Text style={styles.optionText}>Saved Addresses</Text>
        <Icon name="angle-right" size={24} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Your Orders</Text>
        <Icon name="angle-right" size={24} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option}>
        <Text style={styles.optionText}>Settings</Text>
        <Icon name="angle-right" size={24} color="#888" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => {
          /* Add your logout logic here */
        }}
      >
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f7f7f7",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EEEEEE",
    padding: 20,
    marginBottom: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 20,
  },
  profileInfo: {
    justifyContent: "center",
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  profileEmail: {
    fontSize: 16,
    color: "#888",
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  optionText: {
    fontSize: 18,
  },
  logoutButton: {
    backgroundColor: "#D20062",
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  logoutButtonText: {
    color: "#fff",
    textAlign: "center",
  },
});

export default AccountSettings;
