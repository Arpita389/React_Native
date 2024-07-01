import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  ActivityIndicator,
  Alert,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { CartContext } from "./globalState/CartContext";

const ProductList = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isTwoColumn, setIsTwoColumn] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      console.log("Fetched data:", data);
      if (Array.isArray(data.products)) {
        setProducts(data.products);
      } else {
        console.error("Unexpected data structure:", data);
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    Alert.alert("Product added to cart");
    console.log(`Product added to cart: ${product.title}`);
  };

  const handleBuyNow = (product) => {
    // Implement your buy now logic here
    Alert.alert("Product bought");
    console.log(`Product bought: ${product.title}`);
  };

  const toggleLayout = () => {
    setIsTwoColumn(!isTwoColumn);
  };

  const renderItem = ({ item }) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;

    return (
      <View
        key={item.id}
        style={
          isTwoColumn
            ? styles.productContainerTwoColumn
            : styles.productContainer
        }
      >
        <FlatList
          horizontal
          data={item.images}
          renderItem={({ item: image }) => (
            <Image
              source={{ uri: image }}
              style={styles.image}
              onError={(error) => {
                console.error("Image loading error:", error.nativeEvent.error);
              }}
            />
          )}
          keyExtractor={(image, index) => index.toString()}
          style={styles.imageContainer}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View style={styles.tagsContainer}>
            {item.tags.map((tag, index) => (
              <Text key={index} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
          <Text style={styles.rating}>
            {item.rating}
            <Icon name="star" color={"#fff"} style={styles.star} />
          </Text>
          <View style={styles.priceContainer}>
            <Text style={styles.originalPrice}>${item.price.toFixed(2)}</Text>
            <Text style={styles.discountedPrice}>
              ${discountedPrice.toFixed(2)}
            </Text>
            <Text style={styles.discount}>{item.discountPercentage}% off</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Button title="Add to Cart" onPress={() => handleAddToCart(item)} />
            <Button
              title="Buy Now"
              onPress={() => handleBuyNow(item)}
              color="#ff6347"
            />
          </View>
        </View>
      </View>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <Button title="Toggle Layout" onPress={toggleLayout} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={isTwoColumn ? 2 : 1}
        key={isTwoColumn ? "two-column" : "one-column"}
        contentContainerStyle={styles.flatListContentContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  flatListContentContainer: {
    paddingBottom: 16,
  },
  productContainer: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  productContainerTwoColumn: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 8,
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
  tagsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
    marginBottom: 8,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
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
    fontSize: 18,
    fontWeight: "bold",
    color: "green",
  },
  rating: {
    marginTop: 5,
    marginLeft: 5,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
  },
});

export default ProductList;
