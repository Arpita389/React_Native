import React, { useContext } from "react";
import { View, Text, Button, Image, StyleSheet, FlatList } from "react-native";
import { CartContext } from "../commonComponents/globalState/CartContext";

const CartScreen = ({ navigation }) => {
  const { cart, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image source={{ uri: item.images[0] }} style={styles.image} />
            <View style={styles.detailsContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.quantity}>Quantity: {item.quantity}</Text>
              <Button
                title="Remove from Cart"
                onPress={() => handleRemoveFromCart(item.id)}
              />
            </View>
          </View>
        )}
      />
      {cart.length === 0 && (
        <Text style={styles.emptyCart}>Your cart is empty.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  cartItem: {
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginRight: 16,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  emptyCart: {
    fontSize: 20,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
});

export default CartScreen;
