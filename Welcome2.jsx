import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
//import ImageBackground from "./screens/commonComponents/ImageBackgroundComp";
//import ImageBackgroundComp from "./screens/commonComponents/ImageBackgroundComp";
//import Car from "./screens/commonComponents/Car";
//import Bike from "./screens/commonComponents/Bike";
//import UserProfile from "./screens/commonComponents/UserProfile";
//import LandingPage from "./screens/landingPage/LandingPage";
//import Counter from "./screens/commonComponents/Counter";
//import Landing from "./screens/landingPage/Landing";
//import TouchableComponent from "../commonComponents/TouchableComponent";
//import TextInputComponent from "../TextInputComponent";
//import Register from "./screens/landingPage/Register";
//import LoginPage from "./screens/landingPage/LoginPage";
//import ScrollViewComponent from "./screens/scrolls/ScrollViewComponent";
//import FlatListComponent from "./screens/scrolls/FlatlistComponent";
//import SectionListComponent from "./screens/scrolls/SectionListComponent";
//import ButtonScreen from "./screens/landingPage/ButtonScreen";
//import CartDemo from "./screens/demo/CartDemo";
//import UseMemoDemo from "./screens/demo/UseMemoDemo";

//import Account from "./screens/demo/Account";
//import Product from "./screens/commonComponents/Product";
//import ImageComponent from "./screens/commonComponents/ImageComponent";
//import ImageBackground from "./screens/commonComponents/ImageBackground";
//import { Colors } from "react-native/Libraries/NewAppScreen";
import WelcomeScreen from "./WelcomeScreen";
import LoginScreen from "./LoginScreen";
import RegistrationScreen from "./RegistrationScreen";
import ProductList from "../commonComponents/ProductList";
import ProductDetails from "../commonComponents/ProductDetails";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./HomeScreen";
import Icon from "react-native-vector-icons/FontAwesome";
import CartScreen from "./CartScreen";
import { CartProvider } from "../commonComponents/globalState/CartContext";
import AccountSettings from "../demo/AccountSettings";
import EditProfile from "../demo/EditProfile";
import { AuthProvider } from "../commonComponents/globalState/AuthContext";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegistrationScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="ProductList" component={ProductList} />
      <Stack.Screen name="ProductDetails" component={ProductDetails} />
    </Stack.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Stack.Navigator initialRouteName="AccountSettings">
      <Stack.Screen
        name="AccountSettings"
        component={AccountSettings}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      {/*<Stack.Screen name="SavedAddresses" component={SavedAddresses} />*/}
    </Stack.Navigator>
  );
};
export default function Welcome2() {
  return (
    <AuthProvider>
      <CartProvider>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "home";
                } else if (route.name === "Products") {
                  iconName = "list";
                } else if (route.name === "Cart") {
                  iconName = "shopping-cart";
                } else if (route.name === "Account") {
                  iconName = "user-circle";
                }

                return <Icon name={iconName} size={size} color={color} />;
              },
            })}
            tabBarOptions={{
              activeTintColor: "#D20062",
              inactiveTintColor: "gray",
            }}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Products" component={ProductList} />
            <Tab.Screen name="Cart" component={CartScreen} />
            <Tab.Screen name="Account" component={AccountStack} />
          </Tab.Navigator>
        </NavigationContainer>
      </CartProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    //alignItems: "center",
    justifyContent: "center",
    //flexWrap: "wrap",
  },
});

{
  /*
    <View style={styles.container}>
      <ScrollViewComponent />
      <CustomBtn />
      <SectionListComponent />
      <StatusBar style="auto" />
      <View>
      </View>
      <Counter />
      <br />
      <View>
      <LandingPage />
      </View>
      <CartDemo />
      <Register />
      <UseMemoDemo />
      <LoginPage />
      <ButtonScreen />
      <RegistrationScreen />
      <Account />
      <FlatListComponent />
      <LoginScreen />
      <Product />
      <WelcomeScreen />
      <TouchableComponent />
      <ProductList />
    </View>
    */
}
