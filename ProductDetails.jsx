import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CartContext } from "./globalState/CartContext";

const ProductDetails = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const discountedPrice =
    product.price - (product.price * product.discountPercentage) / 100;
  const handleAddToCart = () => {
    addToCart(product);
    Alert.alert("Product added to cart");
  };

  const handleBuyNow = () => {
    Alert.alert("Buy Now clicked");
  };

  const handleAddToWishlist = () => {
    Alert.alert("Added to Wishlist");
  };

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={product.images}
        renderItem={({ item: image }) => (
          <Image
            source={{ uri: image }}
            style={styles.image}
            onError={(error) =>
              console.error("Image loading error:", error.nativeEvent.error)
            }
          />
        )}
        keyExtractor={(image, index) => index.toString()}
        style={styles.imageContainer}
      />
      <View style={styles.detailsContainer}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.rating}>
          {product.rating}
          <Icon name="star" color={"#fff"} style={styles.star} />
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>${product.price.toFixed(2)}</Text>
          <Text style={styles.discountedPrice}>
            ${discountedPrice.toFixed(2)}
          </Text>
          <Text style={styles.discount}>{product.discountPercentage}% off</Text>
        </View>
        <Text style={styles.description}>{product.availabilityStatus}</Text>
        <View style={styles.buttonContainer}>
          <Button title="Add to Cart" onPress={handleAddToCart} />
          <Button title="Buy Now" onPress={handleBuyNow} />
          <Button title="Add to Wishlist" onPress={handleAddToWishlist} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    flexDirection: "row",
    height: 300,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
    marginRight: 8,
  },
  detailsContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 16,
  },
  rating: {
    marginTop: 5,
    marginLeft: 2,
    fontWeight: "100",
    fontSize: 15,
    backgroundColor: "green",
    color: "#fff",
    padding: 6,
    justifyContent: "space-between",
    width: 60,
    borderRadius: 10,
    shadowColor: "rgba(0, 0, 0, 0.24)",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    shadowRadius: 8,
    elevation: 5,
  },
  star: {
    margin: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
    flexWrap: "wrap",
  },
  discountedPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginRight: 8,
  },
  originalPrice: {
    fontSize: 16,
    color: "#999",
    textDecorationLine: "line-through",
    marginRight: 8,
  },
  discount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 8,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default ProductDetails;
