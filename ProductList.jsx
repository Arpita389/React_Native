import React, { useEffect, useState, useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Alert,
  TouchableOpacity,
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
    addToCart(product);
    Alert.alert("Product bought");
    navigation.navigate("Cart");
    console.log(`Product bought: ${product.title}`);
  };

  const toggleLayout = () => {
    setIsTwoColumn(!isTwoColumn);
  };

  const renderItem = ({ item }) => {
    const discountedPrice =
      item.price - (item.price * item.discountPercentage) / 100;

    return (
      <TouchableOpacity
        key={item.id}
        style={
          isTwoColumn
            ? styles.productContainerTwoColumn
            : styles.productContainer
        }
        onPress={() => navigation.navigate("ProductDetails", { product: item })}
      >
        <Image
          source={{ uri: item.images[0] }}
          style={isTwoColumn ? styles.imageTwoColumn : styles.image}
          onError={(error) => {
            console.error("Image loading error:", error.nativeEvent.error);
          }}
        />
        <View
          style={
            isTwoColumn
              ? styles.detailsContainerTwoColumn
              : styles.detailsContainer
          }
        >
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
            <TouchableOpacity
              style={[styles.button, styles.addToCartButton]}
              onPress={() => handleAddToCart(item)}
            >
              <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.buyNowButton]}
              onPress={() => handleBuyNow(item)}
            >
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <TouchableOpacity onPress={toggleLayout} style={styles.toggleButton}>
          <Icon
            name={isTwoColumn ? "th-list" : "th-large"}
            size={30}
            color="black"
          />
        </TouchableOpacity>
      </View>
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
  toggleContainer: {
    alignItems: "flex-end",
    marginBottom: 10,
  },
  toggleButton: {
    padding: 10,
  },
  productContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    padding: 16,
  },
  productContainerTwoColumn: {
    flex: 1,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    margin: 8,
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: "contain",
    marginRight: 16,
  },
  imageTwoColumn: {
    width: "100%",
    height: 150,
    resizeMode: "contain",
    marginBottom: 8,
  },
  detailsContainer: {
    flex: 1,
    justifyContent: "flex-start",
  },
  detailsContainerTwoColumn: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
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
    paddingHorizontal: 4,
    paddingVertical: 4,
    marginRight: 3,
    marginBottom: 8,
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
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 16,
    alignItems: "center",
  },
  button: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  addToCartButton: {
    backgroundColor: "#007bff",
  },
  buyNowButton: {
    backgroundColor: "#D20062",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProductList;
